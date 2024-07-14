"use client";

import { styled } from "styled-components";

export const FormRatingContainer = styled.div`
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;

    button {
      font-size: 1rem;
      background-color: transparent;
      color: #8381d9;
      border: none;
      font-family: inherit;
      cursor: pointer;
    }
  }
`;

export const ModalLoginContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1002;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalLoginContent = styled.div`
  background-color: #181c2a;
  padding: 56px 72px;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  p {
    text-align: center;
    color: #e6e8f2;
    font-size: 1rem;
    margin-bottom: 40px;
  }

  .close-button {
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
    color: #8d95af;
    border: none;
    padding: 12px;
    cursor: pointer;
  }

  .login-options {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const Form = styled.form`
  background-color: #181c2a;
  padding: 24px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin-bottom: 12px;

  .avatar-image {
    border-radius: 50%;
  }

  .user-infos {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
  }

  .buttons-container {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const StyledTextInput = styled.textarea`
  border: solid 1px #303f73;
  border-radius: 4px;
  height: 164px;
  background-color: #0e1116;
  color: #e6e8f2;
  text-align: start;
  padding: 16px;
  font-family: inherit;
  font-size: 1rem;
  margin-bottom: 12px;
  resize: none;

  &:focus {
    border: solid 1px #255d6a;
    outline: none;
  }
`;
