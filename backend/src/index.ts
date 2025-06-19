import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.get("/search", async (request, reply) => {
  const { q } = request.query as { q?: string };
  if (!q) {
    reply.status(400).send({ error: "Missing query parameter: q" });
    return;
  }
  try {
    const url = `https://itunes.apple.com/search?media=podcast&term=${encodeURIComponent(
      q
    )}`;
    const response = await fetch(url);
    const data = await response.json();
    reply.send(data);
  } catch (error) {
    reply.status(500).send({ error: "Failed to fetch from iTunes API" });
  }
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: "0.0.0.0" });
    console.log("Server listening on http://localhost:3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
