"use client";

import styled from "styled-components";

export const Container = styled.div``;

export const StyledCard = styled.div`
  max-width: 725px;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: #252d4a;
  border-radius: 10px;
  height: 100%;
  border: 3px solid transparent;
  cursor: pointer;
  transition-duration: 0.1s;

  &:hover {
    border-color: #303f73;
  }
`;

export const RatingInfos = styled.div`
  display: flex;
  gap: 16px;

  img {
    border-radius: 50%;
    position: relative;
    object-fit: cover;
    width: 40px;
    height: 40px;

    &::after {
      content: "";
      position: absolute;
      border-radius: 50%;
      padding: 4px;
      width: 42px;
      height: 42px;
      background-color: #252d4a;
    }
  }
  .user-infos {
    display: flex;
    flex-direction: column;

    .username {
      color: #f8f9fc;
      font-size: 1rem;
    }
    .date {
      color: #8d95af;
      font-size: 0.875rem;
    }
  }

  .stars {
    margin-left: auto;
  }
`;

export const BookInfos = styled.div`
  display: flex;
  gap: 24px;
`;

export const CardInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .date {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
    }

    div {
      font-size: 1rem;
      color: #8381d9;
    }
  }
  .book-info {
    display: flex;
    flex-direction: column;
  }
  .title {
    color: #f8f9fc;
  }

  .author {
    font-size: 0.875rem;
    font-weight: 400;
    color: #8d95af;
  }

  .sumary {
    color: #d1d6e4;
    font-size: 0.875rem;
  }
`;
