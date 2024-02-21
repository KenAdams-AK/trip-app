import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

import "./SearchBar.scss";

export function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams({ query: "" });
  const query = searchParams.get("query");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams(
      (prev) => {
        prev.set("query", e.target.value.trim());
        return prev;
      },
      { replace: true },
    );
  };

  return (
    <div className="search-bar">
      <input
        type="search"
        value={query ?? ""}
        placeholder="Search your trip"
        onChange={handleSearch}
      />
    </div>
  );
}
