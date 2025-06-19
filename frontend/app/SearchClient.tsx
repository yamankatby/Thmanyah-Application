"use client";

import debounce from "lodash.debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import EpisodeList from "./components/EpisodeList";
import { PodcastItem } from "./components/PodcastCard";
import PodcastList from "./components/PodcastList";
import SearchBar from "./components/SearchBar";

interface ApiResponse {
  podcasts: PodcastItem[];
  episodes: PodcastItem[];
}

const fetcher = (url: string) =>
  fetch(url).then((res) => res.json() as Promise<ApiResponse>);

export default function SearchClient({
  initialQuery,
}: {
  initialQuery: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const debouncedSetQuery = useMemo(
    () => debounce((q: string) => setDebouncedQuery(q), 400),
    []
  );

  const debouncedSyncUrl = useMemo(() => {
    return debounce((q: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (q) params.set("q", q);
      else params.delete("q");
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, 400);
  }, [router, pathname, searchParams]);

  useEffect(() => {
    debouncedSetQuery(query);
    debouncedSyncUrl(query);
  }, [query, debouncedSetQuery, debouncedSyncUrl]);

  useEffect(
    () => () => {
      debouncedSetQuery.cancel();
      debouncedSyncUrl.cancel();
    },
    [debouncedSetQuery, debouncedSyncUrl]
  );

  const { data } = useSWR<ApiResponse>(
    debouncedQuery
      ? `http://127.0.0.1:2027/search?q=${encodeURIComponent(debouncedQuery)}`
      : null,
    fetcher
  );

  const podcasts = data?.podcasts ?? [];
  const episodes = data?.episodes ?? [];

  return (
    <main className="mx-auto max-w-3xl p-6">
      <SearchBar value={query} onChange={setQuery} />
      {!query && <p className="mt-6 text-gray-500">Start typing to search…</p>}
      {query && podcasts.length === 0 && episodes.length === 0 && (
        <p className="mt-6 text-gray-500">No results.</p>
      )}
      <PodcastList items={podcasts} />
      <EpisodeList items={episodes} />
    </main>
  );
}
