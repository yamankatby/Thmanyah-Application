import { useDominantColor } from "@/hooks/useDominantColor";
import Image from "next/image";

export interface PodcastItem {
  trackId?: number;
  collectionId?: number;
  trackName?: string;
  collectionName?: string;
  artistName?: string;
  artworkUrl100?: string;
  artworkUrl600?: string;
  artworkUrl60?: string;
}

export default function PodcastCard({ item }: { item: PodcastItem }) {
  const img = item.artworkUrl600 || item.artworkUrl100 || item.artworkUrl60;

  const dominantColor = useDominantColor(img || "");

  return (
    <li className="flex w-[216px] shrink-0 cursor-pointer flex-col">
      {img && (
        <Image
          src={img}
          alt={item.collectionName || "podcast"}
          width={216}
          height={216}
          className="h-full w-full rounded-sm object-cover"
        />
      )}
      <h3
        className="mt-1 truncate overflow-hidden text-sm text-white hover:underline"
        title={item.collectionName || ""}
      >
        {item.collectionName}
      </h3>
      {item.artistName && (
        <p
          className="truncate overflow-hidden text-xs"
          style={{ color: dominantColor ?? "inherit" }}
          title={item.artistName}
        >
          {item.artistName}
        </p>
      )}
    </li>
  );
}
