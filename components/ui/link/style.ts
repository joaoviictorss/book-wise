"use client";

import styled from "styled-components";

type Props = {
  variant: "white" | "purple";
  icon?: "front" | "back";
  size: "medium" | "small";
};

export const StyledLink = styled.button<Props>`
  color: ${(props) => (props.variant === "purple" ? "#8381D9" : "#E6E8F2")};
  font-size: ${(props) => (props.size === "small" ? "0.875rem" : "1rem")};
  font-family: inherit;
  border: none;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  cursor: pointer;
  background-color: transparent;
  border-radius: 4px;
  &:hover {
    background-color: ${(props) =>
      props.variant === "purple"
        ? "rgba(230, 232, 242, 0.04)"
        : "rgba(131, 129, 217, 0.06)"};
  }
`;
