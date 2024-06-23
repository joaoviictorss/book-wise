"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 32px 64px 0px 64px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  .title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .categories {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .books {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;
  }
`;

export const TitlePage = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #f8f9fc;
  font-size: 1.125rem;
`;
