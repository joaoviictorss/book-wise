import { Container } from "./style";
import Image from "next/image";
import LoginOptions from "@/components/login-options";
import loginImg from "../../assets/background.svg";

export default function Home() {
  return (
    <>
      <Container>
        <div className="img">
          <Image alt="" src={loginImg} className="background" />
        </div>

        <LoginOptions />
      </Container>
    </>
  );
}
