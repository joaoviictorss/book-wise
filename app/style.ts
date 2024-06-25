"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
     /* Fonts */
  --font-default: 'Nunito, sans-serif';

    /* Space */
  --space-px: 1px;  
  --space-1: 0.25rem; 
  --space-2: 0.5rem;  
  --space-3: 0.75rem; 
  --space-4: 1rem;  
  --space-5: 1.25rem; 
  --space-6: 1.5rem;  
  --space-7: 1.75rem; 
  --space-8: 2rem;  
  --space-10: 2.5rem; 
    
  /* Font Sizes */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-md: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
    
  /* Font Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  /* Line Heights */
  --line-height-shorter: 125%;
  --line-height-short: 140%;
  --line-height-base: 160%;
  --line-height-tall: 180%;

  /* Colors */
  --color-white: #FFFFFF;
  --color-black: #000000;

  --color-green-100: #50B2C0;
  --color-green-200: #255D6A;
  --color-green-300: #0A313C;

  --color-purple-100: #8381D9;
  --color-purple-200: #2A2879;

  --color-gray-100: #F8F9FC;
  --color-gray-200: #E6E8F2;
  --color-gray-300: #D1D6E4;
  --color-gray-400: #8D95AF;
  --color-gray-500: #303F73;
  --color-gray-600: #252D4A;
  --color-gray-700: #181C2A;
  --color-gray-800: #0E1116;

  --gradient-vertical: linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%);
  --gradient-horizontal: linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%);

  /* Radii */
  --radius-xs: 2.5px;
  --radius-sm: 5px;
  --radius-md: 10px;
  --radius-lg: 20px;
  --radius-full: 99999px;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, html, :root {
    height: 100%;
  }

  body {
    background-color: var(--color-gray-800);
    color: var(--color-gray-200);
    padding: 20px;
  }

  .gradient-border {
    padding: 2px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--gradient-vertical);

  }
`;
