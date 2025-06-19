import SearchClient from "./SearchClient";

export default async function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  return <SearchClient initialQuery={(await searchParams).q ?? ""} />;
}
