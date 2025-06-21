import { Suspense } from "react";
import SearchResults from "./components/search-results";

export default function SearchPage() {
  return (
    <main>
      <Suspense
        fallback={
          <p className="mt-19 text-center tracking-[-.5px] text-white/70">
            Loading...
          </p>
        }
      >
        <SearchResults />
      </Suspense>
    </main>
  );
}
