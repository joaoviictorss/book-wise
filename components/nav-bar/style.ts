"use client";

import styled from "styled-components";

export const ContainerNavBar = styled.nav`
  height: calc(100vh - 36px);
  background-image: linear-gradient(
    143deg,
    rgba(42, 40, 121, 1) 0%,
    rgba(37, 93, 106, 1) 2%,
    rgba(42, 40, 121, 1) 45%,
    rgba(37, 93, 106, 1) 85%
  );
  border-radius: 12px;
  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 3;
  margin: 20px 0px 0px 20px;
  max-width: 300px;
  width: 100%;

  .routes-container {
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Logo = styled.div`
  display: flex;
  margin-top: 24px;
  justify-content: center;

  .logo {
    height: 40px;
  }
`;

export const UserInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
  border: 2px solid var(--gradient-vertical);

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

export const Login = styled.div`
  display: flex;
  margin-top: auto;
  gap: 12px;
`;
