import Image from "next/image";
import { StyledCard } from "./style";
import RatingStars from "../rating-stars";
import { Rating } from "@prisma/client";

interface BookCardSecondaryProps {
  image_url: string;
  title: string;
  author: string;
  ratings: Rating[];
  onClick?: () => void;
}

const BookCardSecondary = ({
  image_url,
  title,
  author,
  ratings,
  onClick,
}: BookCardSecondaryProps) => {
  const mediaRate =
    ratings.reduce((acc, curr) => acc + curr.rate, 0) / ratings.length;

  return (
    <StyledCard>
      <Image src={image_url} alt="" width={64} height={94} priority />

      <div className="infos">
        <strong className="title">{title}</strong>
        <span className="author">{author}</span>

        <RatingStars mediaRating={mediaRate} />
      </div>
    </StyledCard>
  );
};

export default BookCardSecondary;
