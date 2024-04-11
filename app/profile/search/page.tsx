"use client";
import Button from "@/components/Button";
import Avatar from "@/components/Avatar";
import SearchField from "@/components/SearchField";
import Link from "next/link";
import { useState } from "react";

// Add type here for BookData
type BookData = {
  volumeInfo: {
    title: string;
    authors?: string[];
    imageLinks?: {
      thumbnail: string;
    };
    description: string;
  };
};
type BookDataResponse = {
  items: BookData[];
};

const Search = () => {
  const [searchResults, setSearchResuls] = useState<BookData[]>();
  const onSearchHandler = async (value: string) => {
    const bookResponse = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${value}`
    );
    console.log(bookResponse);
    // update the below line and use `as BookData[]`to cast it to the correct type
    const bookData = (await bookResponse.json()) as BookDataResponse;
    console.log(bookData);

    // set the bookData into some state
    setSearchResuls(bookData.items);
  };

  return (
    <div className="px-3 flex flex-col items-center justify-center p-5">
      <nav className="flex flex-row justify-between w-full mb-4 px-5">
        <Button text="Back" href="/profile" type="button" className="" />
        <Link href="/profile">
          <Avatar
            src="/ProfileAvatar.png"
            width={50}
            height={50}
            alt="Profile Avatar"
            className="rounded-full border-solid border-black border-1 "
          />
        </Link>
      </nav>

      <main className="flex flex-col">
        <SearchField onSearch={onSearchHandler} />
      </main>
      <section>
        {/* Map over the bookData and display the book title and author */}
        {searchResults?.map((result, index) => (
          <div key={index} className="">
            <img src={result.volumeInfo.imageLinks?.thumbnail} />
            <p>{result.volumeInfo.title}</p>
            <p>{result.volumeInfo.authors?.join(", ")}</p>
            <p className="text-xs">{result.volumeInfo.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};
export default Search;
