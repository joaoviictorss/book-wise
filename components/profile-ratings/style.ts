"use client";

import styled from "styled-components";

export const MyBooks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 624px;
`;

export const UserRatingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const UserCardRating = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background-color: #181c2a;
  border-radius: 8px;

  .book-infos {
    display: flex;
    gap: 24px;
  }

  .book-data {
    display: flex;
    flex-direction: column;

    .stars {
      margin-top: auto;
      display: flex;
      align-items: flex-end;
    }
  }

  .title {
    font-size: 1.125rem;
    color: #f8f9fc;
  }
  .author {
    color: #8d95af;
    font-size: 0.875rem;
  }

  .description {
    color: #d1d6e4;
    font-size: 0.875rem;
  }
`;
