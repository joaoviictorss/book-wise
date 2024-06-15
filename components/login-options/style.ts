"use client";

import styled from "styled-components";

export const LoginOptionsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .column {
    display: flex;
    flex-direction: column;
  }

  strong {
    font-size: var(--font-size-lg);
  }

  p {
    font-size: var(--font-size-md);
    margin-bottom: 24px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;
