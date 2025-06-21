"use client";

import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { useDebounce } from "use-debounce";
import EpisodeList from "./episode-list";
import { PodcastItem } from "./podcast-card";
import PodcastList from "./podcast-list";

interface ApiResponse {
  podcasts: PodcastItem[];
  episodes: PodcastItem[];
}

const fetcher = (url: string) =>
  fetch(url).then((res) => res.json() as Promise<ApiResponse>);

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const [debouncedQuery] = useDebounce(query, 400);

  const { data, isLoading } = useSWR<ApiResponse>(
    debouncedQuery
      ? `https://backend-1028443614154.europe-central2.run.app/search?q=${encodeURIComponent(debouncedQuery)}`
      : null,
    fetcher,
    debouncedQuery ? { keepPreviousData: true } : undefined,
  );

  const podcasts = query && data?.podcasts ? data.podcasts : [];
  const episodes = query && data?.episodes ? data.episodes : [];

  return (
    <>
      {!query && (
        <p className="mt-19 text-center tracking-[-.5px] text-white/70">
          Type in a search term to start.
        </p>
      )}
      {query &&
        !isLoading &&
        podcasts.length === 0 &&
        episodes.length === 0 && (
          <p className="mt-19 text-center tracking-[-.5px] text-white/70">
            No results found.
          </p>
        )}

      <div className="flex flex-col gap-[5px] pb-[90px]">
        <PodcastList items={podcasts} />
        <EpisodeList items={episodes} />
      </div>
    </>
  );
}
