import { BookHistoryModel, BookHistoryRequest } from "@/types/api/bookhistory";
import { GoogleBookData } from "@/types/google/volume";
import { QueryData, createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_ANON_KEY as string
);

export const POST = async (request: Request) => {
  const requestBody = (await request.json()) as BookHistoryRequest;
  // example /api/user/1/history

  const userId = request.url.split("/")[5];
  try {
    const { data, error } = await supabase
      .from("reading_history")
      .insert({
        google_book_id: requestBody.google_book_id,
        user_id: userId,
      })
      .select();
    if (error) {
      return NextResponse.error();
    }

    console.log("Data inserted successfully:", data);

    // return data;
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error inserting data:", error);
    return NextResponse.error();
  }
};

export const GET = async (request: Request) => {
  const userId = request.url.split("/")[5];
  console.log(userId);
  try {
    const { data, error } = await supabase
      .from("reading_history")
      .select()
      .eq("user_id", userId);
    if (error) {
      return NextResponse.error();
    }

    const bookHistory = data as BookHistoryModel[];
    console.log(bookHistory);
    const googleBooks: GoogleBookData[] = [];
    // for loop over book history
    for (let i = 0; i < bookHistory.length; i++) {
      // get the google book data
      const currentBookHistory = bookHistory[i];
      // fetch the google book data
      const bookResponse = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${currentBookHistory.google_book_id}`
      );

      console.log(bookResponse.status);
      const bookData = (await bookResponse.json()) as GoogleBookData;
      // put data into array
      googleBooks.push(bookData);
    }

    // return data;
    return NextResponse.json(googleBooks);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.error();
  }
};
