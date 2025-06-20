import Image from "next/image";
import { PodcastItem } from "./podcast-card";

export default function EpisodeCard({ item }: { item: PodcastItem }) {
  const img = item.artworkUrl100 || item.artworkUrl60 || item.artworkUrl600;
  return (
    <li className="flex gap-4">
      {img && (
        <Image
          src={img}
          alt={item.trackName || "episode"}
          width={64}
          height={64}
          className="h-16 w-16 rounded"
        />
      )}
      <div className="flex flex-col justify-center">
        <h3 className="font-medium leading-tight">{item.trackName}</h3>
        {item.collectionName && (
          <p className="text-sm text-gray-500">{item.collectionName}</p>
        )}
      </div>
    </li>
  );
}
