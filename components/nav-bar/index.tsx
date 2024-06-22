import Image from "next/image";
import { ContainerNavBar, Login, Logo, UserInfos } from "./style";
import LogoImg from "../../assets/logo.svg";

import MainNav from "../main-nav";
import { auth, signOut } from "@/auth";
import { LogIn, LogOut } from "lucide-react";
import { redirect } from "next/navigation";

const NavBar = async () => {
  const session = await auth();

  return (
    <ContainerNavBar>
      <Logo>
        <Image src={LogoImg} alt="" className="logo" />
      </Logo>

      <MainNav />

      {session ? (
        <UserInfos>
          <img src={session.user!.image!} alt="" />
          <span>{session.user!.name?.split(" ")[0]}</span>
          <form
            action={async () => {
              "use server";

              await signOut({
                redirectTo: "/",
              });
            }}
          >
            <button type="submit">
              <LogOut color="#F75A68" strokeWidth={1.5} />
            </button>
          </form>
        </UserInfos>
      ) : (
        <Login>
          <span>Fazer Login</span>
          <form
            action={async () => {
              "use server";

              redirect("/");
            }}
          >
            <button type="submit">
              <LogIn color="#50B2C0" strokeWidth={1.5} />
            </button>
          </form>
        </Login>
      )}
    </ContainerNavBar>
  );
};

export default NavBar;
