import EpisodeCard from "./EpisodeCard";
import { PodcastItem } from "./PodcastCard";

export default function EpisodeList({ items }: { items: PodcastItem[] }) {
  if (items.length === 0) return null;
  return (
    <section>
      <h2 className="mt-8 text-xl font-bold">Episodes</h2>
      <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((i) => (
          <EpisodeCard key={i.trackId} item={i} />
        ))}
      </ul>
    </section>
  );
}
