"use client";

import styled from "styled-components";

export const ContainerRatings = styled.div`
  display: flex;
  gap: 64px;

  .flex-col {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .secondary-list {
    width: 325px;
  }
`;
