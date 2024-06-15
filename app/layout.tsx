import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyle } from "./style";

const nunito = Nunito({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book Wise",
  description: "Desafio React 06 - RocketSeat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={nunito.className}>
        <StyledComponentsRegistry>
          {children}
          <GlobalStyle />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
