"use client";

import { styled } from "styled-components"

export const StyledCard = styled.div`
  width: 308px;
  background-color: #181C2A;
  display: flex;
  gap: 20px;
  border-radius: 10px;
  padding: 16px 20px;

  border: 3px solid transparent;
  cursor: pointer;
  transition-duration: .1s;

  &:hover {
    border-color: #303f73;
  }

  .infos {
    display: flex;
    flex-direction: column;

    .title {
      font-size: 0.75rem;
      color: #F8F9FC;
    }

    .author{
      color: #8D95AF;
      font-size: 0.875rem;
    }

    .rating-stars{
      margin-top: auto;
    }
  }
`
