import cors from "@fastify/cors";
import "dotenv/config";
import Fastify from "fastify";

const CACHE_TTL_HOURS = 12;

const app = Fastify({ logger: true });
await app.register(cors);

// await app.register(fastifyPostgres, {
//   connectionString:
//     `postgresql://${process.env.DB_USER}:` +
//     `${encodeURIComponent(process.env.DB_PASS!)}` +
//     `@localhost/${process.env.DB_NAME}` +
//     `?host=/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
// });

// await app.pg.query(`
//   CREATE TABLE IF NOT EXISTS search_cache (
//     query       TEXT PRIMARY KEY,
//     podcasts    JSONB NOT NULL,
//     episodes    JSONB NOT NULL,
//     updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
//   );
// `);

type SearchQuery = { q?: string };

app.get<{ Querystring: SearchQuery }>("/search", async (req, reply) => {
  const { q } = req.query;
  if (!q) return reply.code(400).send({ error: "Missing query parameter: q" });

  const normalisedQuery = q.trim().toLowerCase();

  // try {
  //   const {
  //     rows: [cached],
  //   } = await req.server.pg.query(
  //     `SELECT podcasts, episodes
  //        FROM search_cache
  //       WHERE query = $1
  //         AND updated_at > NOW() - INTERVAL '${CACHE_TTL_HOURS} hours'`,
  //     [normalisedQuery]
  //   );

  //   if (cached) return reply.send({ ...cached, cached: true });
  // } catch (err) {
  //   req.log.error(err);
  // }

  const base = "https://itunes.apple.com/search";
  const common = new URLSearchParams({
    media: "podcast",
    limit: "18",
    term: q,
  }).toString();
  const podcastUrl = `${base}?${common}&entity=podcast`;
  const episodeUrl = `${base}?${common}&entity=podcastEpisode`;

  try {
    const [podcastsRes, episodesRes] = await Promise.all([
      fetch(podcastUrl),
      fetch(episodeUrl),
    ]);
    if (!podcastsRes.ok || !episodesRes.ok)
      throw new Error("iTunes API request failed");

    const [podcasts, episodes] = await Promise.all([
      podcastsRes.json().then((r) => r.results),
      episodesRes.json().then((r) => r.results),
    ]);

    // req.server.pg
    //   .query(
    //     `INSERT INTO search_cache (query, podcasts, episodes)
    //          VALUES ($1, $2::jsonb, $3::jsonb)
    //     ON CONFLICT (query)
    //           DO UPDATE SET
    //             podcasts   = EXCLUDED.podcasts,
    //             episodes   = EXCLUDED.episodes,
    //             updated_at = NOW();`,
    //     [normalisedQuery, JSON.stringify(podcasts), JSON.stringify(episodes)]
    //   )
    //   .catch((err: any) => req.log.error(err));

    return reply.send({ podcasts, episodes, fromCache: false });
  } catch (err) {
    req.log.error(err);
    return reply.code(500).send({ error: "Failed to fetch from iTunes API" });
  }
});

try {
  const address = await app.listen({ port: 8080, host: "0.0.0.0" });
  app.log.info(`Server listening at ${address}`);
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
