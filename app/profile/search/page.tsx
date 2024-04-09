"use client";
import Button from "@/components/Button";
import Avatar from "@/components/Avatar";
import SearchField from "@/components/SearchField";
const Search = async () => {
  const onSearchHandler = async (value: string) => {
    const bookResponse = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${value}`
    );
    console.log(bookResponse);
  };
  // const bookData = await bookResponse.json();
  // console.log(bookData);
  return (
    <div className="px-3">
      <nav className="flex flex-row p-3 ">
        <Button text="Back" href="/profile" type="button" />
        <Avatar />
      </nav>
      <main className="flex flex-col">
        <SearchField onSearch={onSearchHandler} />
      </main>
    </div>
  );
};
export default Search;
