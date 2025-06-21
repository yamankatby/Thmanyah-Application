import Dropdown from "@/components/dropdown";
import { useDominantColor } from "@/hooks/useDominantColor";
import Image from "next/image";
import { PodcastItem } from "./podcast-card";

export default function EpisodeCard({ item }: { item: PodcastItem }) {
  const img = item.artworkUrl100 || item.artworkUrl60 || item.artworkUrl600;
  const dominantColor = useDominantColor(img || "");

  return (
    <li className="mb-1 border-b border-[#23222A] pb-1">
      <div className="flex items-center gap-2 rounded-sm py-0.5 pr-0.5 hover:bg-black/40">
        {img && (
          <Image
            src={img}
            alt={item.trackName || "episode"}
            width={50}
            height={50}
            className="rounded"
          />
        )}
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5">
          <h3 className="cursor-pointer truncate text-xs text-white hover:underline">
            {item.trackName}
          </h3>
          {item.collectionName && (
            <p
              className="truncate text-xs"
              style={{ color: dominantColor ?? "white" }}
            >
              {item.collectionName}
            </p>
          )}
        </div>
        <div className="text-[#50515D]">
          <Dropdown>
            <Dropdown.Item>Add to my Queue</Dropdown.Item>
            <Dropdown.Separator />
            <Dropdown.Item>Go to episode</Dropdown.Item>
            <Dropdown.Item>Go to podcast</Dropdown.Item>
            <Dropdown.Separator />
            <Dropdown.Item>Download</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </li>
  );
}
