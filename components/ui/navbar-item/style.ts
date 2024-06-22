"use client";

import styled from "styled-components";

export const StyledNavBarItem = styled.div<{ $isActive?: boolean }>`
  a {
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;
    color: #8d95af;
    text-decoration: none;
    cursor: pointer;
    color: ${(props) => props.$isActive && "white"};
    font-size: 1.25rem;

    &:hover {
      color: #f8f9fc;
    }

    &::before {
      content: "";
      position: absolute;
      left: -8px;
      top: 0;
      bottom: 0;
      width: 4px;
      border-radius: 10px;
      background: linear-gradient(180deg, #7fd1cc 0%, #9694f5 100%);
      display: ${(props) => (props.$isActive ? "box" : "none")};
      color: ${(props) => props.$isActive && "white"};
    }
  }
`;
