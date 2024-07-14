"use client"

import { TitlePage } from "@/app/(protected)/discover/style";
import { LineChart } from "lucide-react";
import IconLink from "../ui/link";
import { ContainerRatings } from "./style";
import { Book, RatingPost } from "@/types";
import RatingCard from "../ui/rating-card";
import BookCard from "../ui/book-card";
import { useRouter } from "next/navigation";

interface UserRatingsProps {
  ratings: RatingPost[];
  popularBooks: Book[];
}

const UsersRatings = ({ ratings, popularBooks }: UserRatingsProps) => {
  const router = useRouter();

  return (
    <>
      <div className="title">
        <TitlePage>
          <LineChart color="#50B2C0" size={32} />
          Início
        </TitlePage>
      </div>

      <ContainerRatings>
        <div className="flex-col">
          <span>Avaliações mais recentes</span>
          <div className="list">
            {ratings.map((rating) => (
              <RatingCard rating={rating} 
              key={rating.id} />
            ))}
          </div>
        </div>

        <div className="flex-col">
          <div className="flex">
            <span>Livros populares</span>
            <IconLink
              icon="front"
              variant="purple"
              size="small"
              onClick={() => router.push("/discover")}
            >
              Ver todos
            </IconLink>
          </div>
          <div className="list secondary-list">
            {popularBooks.map((book) => (
              <BookCard key={book.id} book={book} ratings={book.ratings!} />
            ))}
          </div>
        </div>
      </ContainerRatings>
    </>
  );
};

export default UsersRatings;
