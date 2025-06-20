import { useSearchParams } from "next/navigation";
import { ScrollArea } from "radix-ui";
import { useMemo } from "react";
import PodcastCard, { PodcastItem } from "./podcast-card";

export default function PodcastList({ items }: { items: PodcastItem[] }) {
  const searchParams = useSearchParams();
  const query = useMemo(() => searchParams.get("q") ?? "", [searchParams]);

  if (items.length === 0) return null;

  return (
    <section className="relative">
      <h2 className="sticky top-[52px] z-40 border-b border-[#2e2e38] bg-[#161727fa] px-5 py-2.5 text-white">
        Top podcasts for {query}
      </h2>
      <ScrollArea.Root
        className="group w-screen md:w-[calc(100vw-226px)]"
        type="always"
      >
        <ScrollArea.Viewport>
          <ul className="mt-4 flex gap-6 px-5">
            {items.map((i) => (
              <PodcastCard key={i.collectionId} item={i} />
            ))}
          </ul>
        </ScrollArea.Viewport>
        <div className="h-5" />
        <ScrollArea.Scrollbar
          className="mx-5 flex h-0.5 touch-none flex-col bg-[#9b9ca11a] transition-all select-none group-hover:h-2"
          orientation="horizontal"
        >
          <ScrollArea.Thumb
            className="relative flex-1 rounded-[10px] bg-[#404080]"
            style={{ boxShadow: "inset 0 1px 1px rgba(255,255,255,.1)" }}
          />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </section>
  );
}
