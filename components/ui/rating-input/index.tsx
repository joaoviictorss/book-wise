"use client";

import "./style.css";
import { forwardRef, InputHTMLAttributes, useState } from "react";
import Star from "../stars/star";
import StarFilled from "../stars/star-filled";

interface RatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  rate: number;
  setRate: (rate: number) => void;
}

const RatingInput = ({ rate, setRate }: RatingInputProps) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="star-container">
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <div
            className="star-container"
            key={index}
            onClick={() => setRate(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rate)}
          >
            {index <= (hover || rate) ? <StarFilled /> : <Star />}
          </div>
        );
      })}
    </div>
  );
};

RatingInput.displayName = "rate";

export default RatingInput;
