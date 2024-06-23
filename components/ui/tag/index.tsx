import { StyledTag } from "./style";

interface TagProps {
  tagName: string;
  isSelected: boolean;
  value?: string;
  onClick?: () => void;
}

const Tag = ({ isSelected, tagName, onClick, value }: TagProps) => {
  return (
    <StyledTag $isSelected={isSelected} onClick={onClick} value={value}>
      {tagName}
    </StyledTag>
  );
};

export default Tag;
