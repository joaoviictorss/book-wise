import { Search } from "lucide-react";
import { InputContainer, InputText } from "./style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  $width?: "default" | "full";
}

const Input = ({ $width = "default", ...props }: InputProps) => {
  return (
    <InputContainer $width={$width}>
      <InputText placeholder="Buscar livro..." {...props}></InputText>
      <Search />
    </InputContainer>
  );
};

export default Input;
