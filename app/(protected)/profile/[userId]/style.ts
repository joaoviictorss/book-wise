"use client";

import styled from "styled-components";

export const ProfilePageContainer = styled.div`
   margin: 64px 64px 0px 400px;
`;

export const TitlePage = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #f8f9fc;
  font-size: 1.125rem;
  margin-bottom: 40px;
`;

export const Container = styled.div`
  display: flex;
  gap: 80px;
`;

export const AnalyticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 310px;

  .separator {
    width: 32px;
    height: 4px;
    background-image: linear-gradient(90deg, #7fd1cc 0%, #9694f5 100%);
    border-radius: 4px;
  }
`;



export const AnalyticsUserInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  img {
    border-radius: 50%;
  }

  .user-infos {
    text-align: center;
    display: flex;
    flex-direction: column;

    span {
      color: #8d95af;
    }
  }
`;

export const AnalyticsUserData = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 56px;
  gap: 40px;
`;

export const DataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #f8f9fc;

  .data {
    display: flex;
    flex-direction: column;

    .quantity {
      color: #e6e8f2;
      font-size: 16px;
    }

    .tag {
      color: #d1d6e4;
    }
  }
`;
