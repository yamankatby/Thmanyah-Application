"use client";

import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { useDebounce } from "use-debounce";
import EpisodeList from "./components/episode-list";
import { PodcastItem } from "./components/podcast-card";
import PodcastList from "./components/podcast-list";

interface ApiResponse {
  podcasts: PodcastItem[];
  episodes: PodcastItem[];
}

const fetcher = (url: string) =>
  fetch(url).then((res) => res.json() as Promise<ApiResponse>);

export default function SearchClient() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const [debouncedQuery] = useDebounce(query, 400);

  const { data, isLoading } = useSWR<ApiResponse>(
    debouncedQuery
      ? `http://127.0.0.1:2027/search?q=${encodeURIComponent(debouncedQuery)}`
      : null,
    fetcher,
    debouncedQuery ? { keepPreviousData: true } : undefined,
  );

  const podcasts = query && data?.podcasts ? data.podcasts : [];
  const episodes = query && data?.episodes ? data.episodes : [];

  return (
    <main>
      {!query && (
        <p className="mt-19 text-center text-[15px] text-white/70">
          Type in a search term to start.
        </p>
      )}
      {query &&
        !isLoading &&
        podcasts.length === 0 &&
        episodes.length === 0 && (
          <p className="mt-19 text-center text-[15px] text-white/70">
            Type in a search term to start.
          </p>
        )}

      <PodcastList items={podcasts} />
      <EpisodeList items={episodes} />
    </main>
  );
}
