import Image from "next/image";
import { StyledCard } from "./style";
import RatingStars from "../rating-stars";
import { Book, Rating } from "@/types";

interface BookCardProps {
  book: Book;
  ratings: Rating[];
  onClick?: () => void;
}

const BookCard = ({ book, ratings, onClick }: BookCardProps) => {
  const mediaRate =
    ratings.reduce((acc, curr) => acc + curr.rate, 0) / ratings.length;

  return (
    <StyledCard>
      <Image src={book.cover_url} alt="" width={64} height={94} priority />

      <div className="infos">
        <strong className="title">{book.name}</strong>
        <span className="author">{book.author}</span>

        <RatingStars mediaRating={mediaRate} />
      </div>
    </StyledCard>
  );
};

export default BookCard;
