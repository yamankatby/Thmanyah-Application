"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onSearch = useCallback(
    (term: string) => {
      const trimmed = term.trim();
      if (searchParams.get("q") === trimmed) return;

      const params = new URLSearchParams(searchParams.toString());

      if (trimmed) {
        params.set("q", trimmed);
      } else {
        params.delete("q");
      }

      router.push(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams],
  );

  return (
    <input
      type="text"
      placeholder="Search through over 70 million podcasts and episodes..."
      className="mx-auto h-8 max-w-[500px] flex-1 rounded-[10px] border border-white/25 text-center text-[#898990] placeholder-[#8A8A91] focus:border-[#7B7BF0] focus:bg-white/5 focus:text-white focus:outline-none focus:placeholder:text-transparent md:max-w-none md:text-sm"
      defaultValue={searchParams.get("q") ?? ""}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
