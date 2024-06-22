"use client";

import styled from "styled-components";

export const StyledCard = styled.div`
  padding: 20px 24px;
  display: flex;
  gap: 24px;
  background-color: #252d4a;
  border-radius: 10px;
  width: 600px;
  height: 100%;
  border: 3px solid transparent;
  cursor: pointer;
  transition-duration: 0.1s;

  &:hover {
    border-color: #303f73;
  }
`;

export const CardInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  .date {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: #d1d6e4;
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
    margin-top: auto;
  }
`;
