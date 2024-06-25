"use client";

import { styled } from "styled-components";

export const StyledCard = styled.div`
  background-color: #181c2a;
  display: flex;
  gap: 20px;
  border-radius: 10px;
  padding: 16px 20px;
  border: 3px solid transparent;
  cursor: pointer;
  transition-duration: 0.1s;

  &:hover {
    border-color: #303f73;
  }

  .infos {
    display: flex;
    flex-direction: column;

    .title {
      font-size: 0.75rem;
      color: #f8f9fc;
    }

    .author {
      color: #8d95af;
      font-size: 0.875rem;
    }

    .rating-stars {
      margin-top: auto;
    }
  }
`;
