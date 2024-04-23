"use client";
import { GoogleBookData } from "@/types/google/volume";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Background = () => {
  const [bookCollection, setBookCollection] = useState<GoogleBookData[]>();

  // Fetching data from API
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/user/Hannah/history");
      const jsonData = await response.json();
      setBookCollection(jsonData);
    };
    fetchData();
  }, []);

  return (
    <section className="flex justify-center w-full h-full">
      <Carousel className="w-4/5 max-w-screen-xl">
        <CarouselContent className="flex justify-between">
          {bookCollection?.map((book, index) => (
            <CarouselItem key={index} className="basis-1/4 h-">
              <div className="p-1">
                <Card className="flex flex-col items-center justify-between p-6 h-full">
                  <CardHeader>
                    <CardTitle className="text-sm">
                      {book.volumeInfo?.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {book.volumeInfo.authors?.join(", ")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center items-center flex-grow">
                    <img
                      className="w-auto h-[150px]"
                      src={
                        book.volumeInfo.imageLinks?.thumbnail ??
                        "/flowerBook.jpg"
                      }
                      alt="Book Cover"
                    />
                  </CardContent>
                  <CardFooter className="text-sm">
                    {book.volumeInfo.pageCount} pages
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Background;
