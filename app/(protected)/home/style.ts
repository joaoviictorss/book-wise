"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 64px 64px 0px 400px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  .title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .ratings {
    display: flex;
  }
`;

export const TitlePage = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #f8f9fc;
  font-size: 1.125rem;
`;
