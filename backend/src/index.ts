import cors from "@fastify/cors";
import Fastify from "fastify";

const app = Fastify({ logger: true });

await app.register(cors);

type SearchQuery = { q?: string };

app.get<{ Querystring: SearchQuery }>("/search", async (req, reply) => {
  const { q } = req.query;
  if (!q) return reply.code(400).send({ error: "Missing query parameter: q" });

  const base = "https://itunes.apple.com/search";
  const common = new URLSearchParams({
    media: "podcast",
    limit: "24",
    term: q,
  }).toString();
  const podcastUrl = `${base}?${common}&entity=podcast`;
  const episodeUrl = `${base}?${common}&entity=podcastEpisode`;

  try {
    const [podcastsRes, episodesRes] = await Promise.all([
      fetch(podcastUrl),
      fetch(episodeUrl),
    ]);

    if (!podcastsRes.ok || !episodesRes.ok) {
      throw new Error("One or more iTunes API requests failed");
    }

    const [podcasts, episodes] = await Promise.all([
      podcastsRes.json().then((res) => res.results),
      episodesRes.json().then((res) => res.results),
    ]);

    reply.send({ podcasts, episodes });
  } catch (err) {
    req.log.error(err);
    reply.code(500).send({ error: "Failed to fetch from iTunes API" });
  }
});

try {
  const address = await app.listen({ port: 2027, host: "0.0.0.0" });
  app.log.info(`Server listening at ${address}`);
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
