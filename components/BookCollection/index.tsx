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
    <section className=" overflow-x-auto w-3/5 m-10">
      <div className="flex">
        {bookCollection?.map((book, index) => (
          <div key={index} className="flex mx-4 w-32">
            <div className="max-w-xs rounded overflow-hidden shadow-lg">
              <img
                className="max-w-[120px] h-auto"
                src={book.volumeInfo.imageLinks?.thumbnail ?? "/flowerBook.jpg"}
                alt="Book Cover"
              />
              <div className="px-6 py-4">
                <p className="font-bold text-sm mb-2">
                  {book.volumeInfo?.title}
                </p>
                <p className="text-gray-700 font-semibold text-xs">
                  {book.volumeInfo.authors?.join(", ")}
                </p>
                <p className="text-gray-700 text-xs">
                  {book.volumeInfo.pageCount} pages
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookCollection;
