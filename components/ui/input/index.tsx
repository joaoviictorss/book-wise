import { Search } from "lucide-react";
import { InputContainer, InputText } from "./style";

const Input = () => {
  return (
    <InputContainer>
      <InputText placeholder="Placeholder"></InputText>
      <Search />
    </InputContainer>
  );
};

export default Input;
