import { Search } from "lucide-react";
import { InputContainer, InputText } from "./style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...props }: InputProps) => {
  return (
    <InputContainer>
      <InputText placeholder="Buscar livro..." {...props}></InputText>
      <Search />
    </InputContainer>
  );
};

export default Input;
