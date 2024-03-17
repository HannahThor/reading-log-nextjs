"use client";

import Button from "@/components/Button";
import SearchField from "@/components/SearchField";

const Search = () => {
  return (
    <main className="flex flex-col">
      <Button text="Back" href="/profile" />
      <SearchField
        onSearch={(value) => {
          console.log(value);
        }}
      />
    </main>
  );
};
export default Search;
