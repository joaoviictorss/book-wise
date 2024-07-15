"use client";

import { RatingPost } from "@/types";
import Input from "../ui/input";
import { MyBooks, UserCardRating, UserRatingsContainer } from "./style";
import Image from "next/image";
import RatingStars from "../ui/rating-stars";
import { useState } from "react";
import formatDate from "@/utils/format-date";

interface ProfileRatingsProps {
  userRatings: RatingPost[];
}

const ProfileRatings = ({ userRatings }: ProfileRatingsProps) => {
  const [searchFilter, setSearchFilter] = useState("");

  const filteredRatings = userRatings.filter((rating) =>
    rating.book.name.toLowerCase().includes(searchFilter)
  );

  return (
    <MyBooks>
      <Input
        placeholder="Buscar livro avaliado"
        $width="full"
        value={searchFilter}
        onChange={(e) => setSearchFilter(e.target.value)}
      />

      {filteredRatings!.length > 0 ? (
        <UserRatingsContainer>
          {filteredRatings?.map((rating) => (
            <div key={rating.id}>
              
              <UserCardRating>
                <div className="book-infos">
                  <Image
                    src={rating.book.cover_url}
                    width={98}
                    height={134}
                    alt=""
                  />
                  <div className="book-data">
                    <h3 className="title">{rating.book.name}</h3>
                    <span className="author">{rating.book.author}</span>
                    <div className="stars">
                      <RatingStars mediaRating={rating.rate} />
                    </div>
                  </div>
                </div>
                <div className="description">
                  <p>{rating.description}</p>
                </div>
              </UserCardRating>
            </div>
          ))}
        </UserRatingsContainer>
      ) : (
        <p>Nenhuma avaliação encontrada</p>
      )}
    </MyBooks>
  );
};

export default ProfileRatings;
