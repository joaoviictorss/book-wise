import { Container } from "./style";
import Image from "next/image";
import LoginOptions from "@/components/login-options";
import loginImg from "../../assets/background.svg";
import { auth } from "@/auth";
import { redirect } from "next/navigation";


export default async function Home() {
  const session = await auth();

  if (session) {
    redirect('/home')
  }

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
