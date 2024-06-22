"use client";

import styled from "styled-components";

export const LoginButtonContainer = styled.button`
  background-color: var(--color-gray-600);
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 8px;
  outline: none;
  border: none;
  color: var(--color-gray-200);
  font-size: var(--font-regular);
  font-family: inherit;
  width: 350px;
  cursor: pointer;

  &:hover {
    filter: brightness(120%);
  }
`;
