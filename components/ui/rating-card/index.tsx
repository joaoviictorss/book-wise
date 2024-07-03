"use client";

import Image from "next/image";
import { BookInfos, CardInfos, RatingInfos, StyledCard } from "./style";
import RatingStars from "../rating-stars";

import formatDate from "@/utils/format-date";
import { RatingPost } from "@/types";
import Link from "next/link";


interface RatingCardProps {
  onClick?: () => void;
  rating: RatingPost;
}

const RatingCard = ({ rating, onClick }: RatingCardProps) => {
  return (
    <StyledCard onClick={onClick}>
      <RatingInfos>
        <div className="gradient-border">
          <Image src={rating.user.image!} width={40} height={40} alt="" />
        </div>
        <div className="user-infos">
          <span className="username">{rating.user.name}</span>
          <span className="date">{formatDate(rating.book.created_at!)}</span>
        </div>
        <div className="stars">
          <RatingStars mediaRating={rating.rate} />
        </div>
      </RatingInfos>

      <BookInfos>
        <Link
          href={"/discover?modal=true&book=" + rating.book.id}
          scroll={false}
        >
          <Image
            src={rating.book.cover_url!}
            alt=""
            width={108}
            height={152}
            priority
          />
        </Link>

        <CardInfos>
          <div className="book-info">
            <strong className="title">{rating.book.name}</strong>
            <span className="author">{rating.book.author}</span>
          </div>

          <div className="sumary">{rating.book.summary}</div>
        </CardInfos>
      </BookInfos>
    </StyledCard>
  );
};

export default RatingCard;
