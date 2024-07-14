"use client";

import { usePathname } from "next/navigation";
import { BookHeart, User, LineChart } from "lucide-react";
import NavBarItem from "../ui/navbar-item";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";

interface MainNavProps {
  session: Session | null;
}

const MainNav = ({ session }: MainNavProps) => {
  const pathname = usePathname();

  const routes = [
    {
      href: "/home",
      icon: <LineChart />,
      title: "Início",
      isActive: pathname === "/home",
    },
    {
      href: "/discover",
      icon: <BookHeart />,
      title: "Explorar",
      isActive: pathname === "/discover",
    },
    {
      href: `/profile/${session?.user?.id}`,
      icon: <User />,
      title: "Perfil",
      isActive: pathname.includes(`/profile`),
      authRequired: true,
    },
  ];
  return (
    <div className="routes-container">
      {routes.map((route) => {
        if (route.authRequired && !session) {
          return null;
        }
        return (
          <NavBarItem
            title={route.title}
            icon={route.icon}
            href={route.href}
            isActive={route.isActive}
            key={route.href}
          />
        );
      })}
    </div>
  );
};

export default MainNav;
