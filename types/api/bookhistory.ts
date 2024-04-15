export type BookHistoryResponse = {
  id: number;
  createdAt: string;
  googleBookId: string;
  userId: string;
};

export type BookHistoryRequest = {
  google_book_id: string;
  user_id: string;
};
