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
    <li className="flex shrink-0 cursor-pointer flex-col">
      {img && (
        <Image
          src={img}
          alt={item.collectionName || "podcast"}
          width={200}
          height={200}
          className="rounded-sm"
        />
      )}
      <h3 className="mt-1 text-sm text-white hover:underline">
        {item.collectionName}
      </h3>
      {item.artistName && (
        <p className="text-xs" style={{ color: dominantColor ?? "inherit" }}>
          {item.artistName}
        </p>
      )}
    </li>
  );
}
