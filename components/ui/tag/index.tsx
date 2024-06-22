import { StyledTag } from "./style";

interface TagProps {
  tagName: string;
  isSelected: boolean;
}

const Tag = ({ isSelected, tagName }: TagProps) => {
  return <StyledTag isSelected={isSelected}>{tagName}</StyledTag>;
};

export default Tag;
