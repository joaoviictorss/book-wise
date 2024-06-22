"use client";

import Image from "next/image";
import { CardInfos, StyledCard } from "./style";
import { Rating } from "@/types";
import RatingStars from "../rating-stars";

interface BookCardProps {
  image_url: string;
  date: string;
  title: string;
  author: string;
  sumary: string;
  ratings: Rating[];
  onClick?: () => void;
}

const BookCard = ({
  image_url,
  date,
  ratings,
  title,
  author,
  sumary,
  onClick,
}: BookCardProps) => {
  const mediaRate =
    ratings.reduce((acc, curr) => acc + curr.rate, 0) / ratings.length;

  return (
    <StyledCard onClick={onClick}>
      <Image src={image_url} alt="" width={108} height={152} priority />

      <CardInfos>
        <div className="date">
          <span>{date}</span>
          <RatingStars mediaRating={mediaRate} />
        </div>

        <div className="book-info">
          <strong className="title">{title}</strong>
          <span className="author">{author}</span>
        </div>

        <div className="sumary">{sumary}</div>
      </CardInfos>
    </StyledCard>
  );
};

export default BookCard;
