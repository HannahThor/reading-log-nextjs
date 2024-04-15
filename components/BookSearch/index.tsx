"use client";
import Button from "@/components/Button";
import { BookHistoryRequest } from "@/types/api/bookhistory";
import { BookData } from "@/types/google/volume";
import SearchField from "../SearchField";
import { useState } from "react";

type BookDataResponse = {
  items: BookData[];
};

const BookSearch = () => {
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

  const handleSubmit = async (id: string) => {
    console.log("hello");
    // call history endpoint api/history(POST)
    const request: BookHistoryRequest = {
      google_book_id: id,
      user_id: "Hannah",
    };
    console.log(request);
    const response = await fetch("/api/history", {
      method: "POST",
      body: JSON.stringify(request),
    });
    // TODO error handling
    if (!response.ok) {
      console.error("Failed to add book");
    }
  };

  return (
    <>
      <main className="flex flex-col py-10">
        <SearchField onSearch={onSearchHandler} />
      </main>
      <section className="w-3/5">
        {/* Map over the bookData and display the book title and author */}
        {searchResults?.map((result, index) => (
          <div key={index} className="flex items-start mb-4">
            <img
              className="w-100 h-auto mx-4"
              src={result.volumeInfo.imageLinks?.thumbnail}
              alt="Book Cover"
            />
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">
                {result.volumeInfo.title}
              </h3>
              <p className="text-sm text-gray-600">
                {result.volumeInfo.authors?.join(", ")}
              </p>
              <p className="text-xs font-light">
                {result.volumeInfo.description}
              </p>
            </div>{" "}
            {/* <Button text="Add"  type="submit"/> */}
            <Button
              type="button"
              text="Add"
              onClick={() => handleSubmit(result.id)}
            />
          </div>
        ))}
      </section>
    </>
  );
};
export default BookSearch;
