"use client";

import styled from "styled-components";

export const InputContainer = styled.div<{ $isActive?: boolean, $width?: "default" | "full" }>`
  display: flex;
  align-items: center;
  border: solid 2px #303f73;
  border-radius: 5px;
  color: var(--color-gray-200);
  width: ${({ $width }) => ($width === "default" ? "300px" : "100%")};

  &:focus-within {
    border-color: #255d6a;

    svg {
      color: #255d6a;
    }
  }

  svg {
    color: #303f73;
    position: relative;
    right: 12px;
    pointer-events: none;
  }
`;

export const InputText = styled.input.attrs({ type: "text" })`
  outline: none;
  background-color: transparent;
  border: none;
  font-family: inherit;
  color: inherit;
  width: 100%;
  height: 100%;
  padding: 14px 20px;
  caret-color: #255d6a;
  position: relative;
`;
