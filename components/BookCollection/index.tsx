import { GoogleBookData } from "@/types/google/volume";
import { useEffect, useState } from "react";

const BookCollection = () => {
  const [bookCollection, setBookCollection] = useState<GoogleBookData[]>();

  // /api/user/Hannah/history(GET)
  useEffect(() => {
    fetch("/api/user/Hannah/history");
  });

  return bookCollection?.map((book) => {
    <p>{book.volumeInfo.title}</p>;
  });
};

export default BookCollection;
