"use client"

import styled from "styled-components";

export const StyledTag = styled.button<{ isSelected?: boolean }>`
  color: #8381D9;
  font-size: 1rem;
  outline: none;
  border: 2px solid #8381D9;
  border-radius: 99999px;
  padding: 4px 15px;
  cursor: pointer;
  font-family: inherit;
  background-color: transparent;
  background-color: ${(props) => props.isSelected && "#8381D9"};
  color: ${(props) => props.isSelected && "white"};

  &:hover {
    background-color: #2A2879;
    color: white;
  }
`