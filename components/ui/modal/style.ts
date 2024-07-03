"use client";

import { styled } from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1001;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 660px;
  background-color: #0e1116;
  height: 100%;
  padding: 40px;

  .close-button {
    display: flex;
    justify-content: flex-end;
  }
`;

export const CardBook = styled.div`
  background-color: #181c2a;
  padding: 24px 32px 16px 32px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  border-radius: 10px;
  margin-bottom: 40px;
  .book-data {
    display: flex;
    gap: 32px;
  }
  .book-info {
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 0.875rem;
    color: #f8f9fc;
  }

  .author {
    color: #8d95af;
    font-size: 1rem;
  }

  .rating-stars {
    margin-top: auto;
    display: flex;
    flex-direction: column;

    span {
      color: #8d95af;
      font-size: 0.875rem;
    }
  }

  .book-description {
    border-top: 1px solid #252d4a;
    display: flex;
    align-items: center;

    gap: 56px;
    padding: 24px 0;

    .category,
    .pages {
      display: flex;
      gap: 16px;
      align-items: center;
      justify-content: center;

      .column {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

export const RatingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const UserRating = styled.div`
  background-color: #181c2a;
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .user-info {
    display: flex;
    justify-content: space-between;
  }

  .user-avatar {
    display: flex;
    gap: 16px;

    img {
      border-radius: 50%;
    }
  }
  .user-infos {
    display: flex;
    flex-direction: column;
  }

  .user-name {
    color: #f8f9fc;
  }

  .date {
    color: #8d95af;
  }
`;
