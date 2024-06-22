import NavBar from "@/components/nav-bar";
import { LayoutPages } from "./style";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutPages>
      <NavBar />
      {children}
    </LayoutPages>
  );
}
