import Dropdown from "@/components/dropdown";
import Chevron from "@/components/icons/chevron";
import { useSearchParams } from "next/navigation";
import { ScrollArea } from "radix-ui";
import { useMemo } from "react";
import PodcastCard, { PodcastItem } from "./podcast-card";
import Section from "./section";

export default function PodcastList({ items }: { items: PodcastItem[] }) {
  const searchParams = useSearchParams();
  const query = useMemo(() => searchParams.get("q") ?? "", [searchParams]);

  if (items.length === 0) return null;

  return (
    <Section
      title={`Top podcasts for ${query}`}
      controls={
        <div className="flex items-center gap-1">
          <div className="flex items-center">
            {[
              <Chevron key="1" className="size-[18px]" />,
              <Chevron key="2" className="size-[18px] rotate-180" />,
            ].map((icon, index) => (
              <button
                key={index}
                className="flex size-[30px] cursor-pointer items-center justify-center rounded-full text-white opacity-70 hover:bg-[#21223b] hover:opacity-100"
              >
                {icon}
              </button>
            ))}
          </div>

          <Dropdown>
            <Dropdown.Item>Switch layout to Grid</Dropdown.Item>
          </Dropdown>
        </div>
      }
    >
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
    </Section>
  );
}
