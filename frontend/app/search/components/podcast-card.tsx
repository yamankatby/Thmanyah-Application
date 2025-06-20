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
    <li className="flex shrink-0 flex-col items-center gap-2">
      {img && (
        <Image
          src={img}
          alt={item.collectionName || "podcast"}
          width={200}
          height={200}
          className="rounded-sm"
        />
      )}
      <h3 className="text-center leading-snug font-semibold text-white">
        {item.collectionName}
      </h3>
      {item.artistName && (
        <p
          className="text-center text-sm text-gray-500"
          style={{ color: dominantColor ?? "inherit" }}
        >
          {item.artistName}
        </p>
      )}
    </li>
  );
}
