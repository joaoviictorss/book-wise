import Image from "next/image";
import { StyledCard } from "./style";
import RatingStars from "../rating-stars";
import { Book, Rating } from "@/types";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface BookCardProps {
  book: Book;
  ratings: Rating[];
}

const BookCard = ({ book, ratings }: BookCardProps) => {
  const pathname = usePathname();
  const url = new URL(pathname ? pathname : "/", "http://localhost:3000");
  url.searchParams.set("modal", "true");
  url.searchParams.set("book", book.id.toString());

  const mediaRate =
    ratings.reduce((acc, curr) => acc + curr.rate, 0) / ratings.length;

  return (
    <Link href={url.toString()} scroll={false}>
      <StyledCard>
        <Image src={book.cover_url} alt="" width={64} height={94} priority />

        <div className="infos">
          <strong className="title">{book.name}</strong>
          <span className="author">{book.author}</span>

          <RatingStars mediaRating={mediaRate} />
        </div>
      </StyledCard>
    </Link>
  );
};

export default BookCard;
