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
  return (
    <li className="flex w-40 flex-col items-center gap-2">
      {img && (
        <Image
          src={img}
          alt={item.collectionName || "podcast"}
          width={216}
          height={216}
          className="rounded-lg"
        />
      )}
      <h3 className="text-center font-semibold leading-snug">
        {item.collectionName}
      </h3>
      {item.artistName && (
        <p className="text-center text-sm text-gray-500">{item.artistName}</p>
      )}
    </li>
  );
}
