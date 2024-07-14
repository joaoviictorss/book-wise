"use client";

import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { useState } from "react";
import {
  Form,
  FormRatingContainer,
  ModalLoginContainer,
  ModalLoginContent,
  StyledTextInput,
} from "./style";

import googleImg from "../../assets/logos_google-icon.svg";
import githubImg from "../../assets/github-logo.svg";
import LoginButton from "../login-button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { Check, X } from "lucide-react";
import Button from "../ui/button";
import Image from "next/image";
import RatingInput from "../ui/rating-input";
import axios from "axios";

interface FormRatingProps {
  session: Session | null;
  bookId: string;
}

const FormRating = ({ session, bookId }: FormRatingProps) => {
  const [openForm, setOpenForm] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [rate, setRate] = useState(0);
  const [description, setDescription] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.post("/api/ratings", { rate, description, book_id: bookId });
      window.document.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  function handleOpen() {
    if (!session) {
      return setOpenModal(true);
    }

    setOpenForm(!openForm);
  }

  const handleLogin = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <FormRatingContainer>
      <div className="title">
        <span>Avaliações</span>
        <button onClick={handleOpen}>Avaliar</button>
      </div>

      {openModal && (
        <ModalLoginContainer>
          <ModalLoginContent>
            <button
              className="close-button"
              onClick={() => setOpenModal(false)}
            >
              <X />
            </button>
            <p>Faça login para deixar sua avaliação</p>
            <div className="login-options">
              <LoginButton
                onClick={() => handleLogin("google")}
                text="Entrar com Google"
                iconSrc={googleImg}
              />
              <LoginButton
                onClick={() => handleLogin("github")}
                text="Entrar com GitHub"
                iconSrc={githubImg}
              />
            </div>
          </ModalLoginContent>
        </ModalLoginContainer>
      )}

      {openForm && (
        <Form onSubmit={onSubmit}>
          <div className="user-infos">
            <div className="gradient-border">
              <Image
                src={session?.user?.image!}
                alt="avatar"
                width={40}
                height={40}
                className="avatar-image"
              />
            </div>
            <span>{session?.user?.name}</span>

            <RatingInput rate={rate} setRate={setRate} />
          </div>
          <StyledTextInput
            value={description}
            maxLength={450}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="buttons-container">
            <Button onClick={handleOpen} type="button">
              <X color="#8381D9" />
            </Button>
            <Button type="submit">
              <Check color="#50B2C0" />
            </Button>
          </div>
        </Form>
      )}
    </FormRatingContainer>
  );
};

export default FormRating;
