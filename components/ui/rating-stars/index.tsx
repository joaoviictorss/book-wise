import { StyledStar } from "./style";

import StarFilled from "../stars/star-filled";
import Star from "../stars/star";

interface RatingStarsProps {
  mediaRating: number;
}

const RatingStars = ({ mediaRating }: RatingStarsProps) => {
  const totalStars = 5;

  // Cria um array com o total de estrelas (preenchidas e vazias)
  const stars = Array.from({ length: totalStars }, (_, index) => {
    return (
      <span key={index}>{index < mediaRating ? <StarFilled /> : <Star />}</span>
    );
  });

  return <StyledStar>{stars}</StyledStar>;
};

export default RatingStars;
