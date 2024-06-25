import { Book as BookPrisma } from "@prisma/client";
import { User as UserPrisma } from "@prisma/client";
import { User } from "next-auth";

export type Rating = {
  id: string;
  rate: number;
  description: string;
  created_at: Date;
  book_id: string;
  user_id: string;
};

export type Book = {
  id: string;
  name: string;
  author: string;
  summary: string;
  cover_url: string;
  total_pages: number;
  created_at: Date;
  ratings: Rating[];
  categories: Category[];
};

export type Category = {
  book_id: string;
  categoryId: string;
};

export type CategoriesOnBooks = {
  book: Book;
  category: Category;
};

export type RatingPost = {
  id: string;
  rate: number;
  description: string;
  created_at: Date;
  book_id: string;
  user_id: string;
  user: UserPrisma;
  book: BookPrisma;
};
