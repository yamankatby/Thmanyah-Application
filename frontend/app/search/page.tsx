import SearchClient from "./client";

export default async function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  return <SearchClient initialQuery={(await searchParams).q ?? ""} />;
}
