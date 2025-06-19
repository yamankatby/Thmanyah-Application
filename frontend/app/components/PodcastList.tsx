import PodcastCard, { PodcastItem } from "./PodcastCard";

export default function PodcastList({ items }: { items: PodcastItem[] }) {
  if (items.length === 0) return null;
  return (
    <section>
      <h2 className="mt-8 text-xl font-bold">Podcasts</h2>
      <ul className="mt-4 flex flex-wrap gap-6">
        {items.map((i) => (
          <PodcastCard key={i.collectionId} item={i} />
        ))}
      </ul>
    </section>
  );
}
