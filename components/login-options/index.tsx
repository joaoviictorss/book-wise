"use client";

import { signIn } from "next-auth/react";
import { LoginOptionsContainer } from "./style";
import LoginButton from "../login-button";

// Images URL
import googleImg from "../../assets/logos_google-icon.svg";
import githubImg from "../../assets/github-logo.svg";
import rocketImg from "../../assets/rocket-logo.svg";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useRouter } from "next/navigation";

const LoginOptions = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  const router = useRouter();

  return (
    <LoginOptionsContainer>
      <div className="column">
        <strong>Boas vindas</strong>
        <p>Faça seu login ou acesse como visitante.</p>

        <div>
          <LoginButton
            onClick={() => onClick("google")}
            text="Entrar com Google"
            iconSrc={googleImg}
          />
          <LoginButton
            onClick={() => onClick("github")}
            text="Entrar com GitHub"
            iconSrc={githubImg}
          />
          <LoginButton
            onClick={() => router.push("/home")}
            text="Acessar como visitante"
            iconSrc={rocketImg}
          />
        </div>
      </div>
    </LoginOptionsContainer>
  );
};

export default LoginOptions;
