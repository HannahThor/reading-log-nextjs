import { GoogleBookData } from "@/types/google/volume";
import { useEffect, useState } from "react";

const BookCollection = () => {
  const [bookCollection, setBookCollection] = useState<GoogleBookData[]>();

  // /api/user/Hannah/history(GET)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/user/Hannah/history");
      const jsonData = await response.json();
      setBookCollection(jsonData);
    };
    fetchData();
  }, []);

  return (
    <>
      {bookCollection?.map((book, index) => (
        <div key={index}>
          <img
            className="w-100 h-auto mx-4"
            src={book.volumeInfo.imageLinks?.thumbnail ?? "/flowerBook.jpg"}
            alt="Book Cover"
          />
          <p>{book.volumeInfo?.title}</p>
          <p className="text-sm text-gray-600">
            {book.volumeInfo.authors?.join(", ")}
          </p>
        </div>
      ))}
    </>
  );
};

export default BookCollection;
