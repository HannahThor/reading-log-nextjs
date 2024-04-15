import { BookHistoryRequest } from "@/types/api/bookhistory";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_ANON_KEY as string
);

export const POST = async (request: Request) => {
  const requestBody = (await request.json()) as BookHistoryRequest;
  try {
    const { data, error } = await supabase
      .from("reading_history")
      .insert({
        google_book_id: requestBody.google_book_id,
        user_id: requestBody.user_id,
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
