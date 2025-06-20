import { useDominantColor } from "@/hooks/useDominantColor";
import Image from "next/image";
import { PodcastItem } from "./podcast-card";

export default function EpisodeCard({ item }: { item: PodcastItem }) {
  const img = item.artworkUrl100 || item.artworkUrl60 || item.artworkUrl600;
  const dominantColor = useDominantColor(img || "");

  return (
    <li className="border-b border-[#23222A] pb-1">
      <div className="flex gap-4 rounded-sm p-1.5 hover:bg-black/40">
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
          <h3 className="truncate text-xs text-white">{item.trackName}</h3>
          {item.collectionName && (
            <p
              className="truncate text-xs"
              style={{ color: dominantColor ?? "white" }}
            >
              {item.collectionName}
            </p>
          )}
        </div>
      </div>
    </li>
  );
}
