import Image from "next/image";
import { LoginButtonContainer } from "./style";

export interface LoginButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  iconSrc: string;
}

const LoginButton = ({ text, iconSrc, ...props }: LoginButtonProps) => {
  return (
    <LoginButtonContainer {...props}>
      <Image src={iconSrc} alt="" />
      {text}
    </LoginButtonContainer>
  );
};

export default LoginButton;
