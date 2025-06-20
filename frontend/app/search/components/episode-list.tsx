import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import EpisodeCard from "./episode-card";
import { PodcastItem } from "./podcast-card";
import Section from "./section";

export default function EpisodeList({ items }: { items: PodcastItem[] }) {
  const searchParams = useSearchParams();
  const query = useMemo(() => searchParams.get("q") ?? "", [searchParams]);

  if (items.length === 0) return null;

  return (
    <Section title={`Top episodes for ${query}`}>
      <ul className="mt-2 grid grid-cols-1 gap-x-5 px-5 md:grid-cols-3">
        {items.slice(0, 18).map((i) => (
          <EpisodeCard key={i.trackId} item={i} />
        ))}
      </ul>
    </Section>
  );
}
