import Link from "next/link";
import { StyledNavBarItem } from "./style";

interface NavBarItemProps {
  href: string;
  title: string;
  icon: React.ReactElement;
  isActive?: boolean;
}

const NavBarItem = ({ href, icon, title, isActive }: NavBarItemProps) => {
  return (
    <StyledNavBarItem $isActive={isActive}>
      <Link href={href}>
        <span />
        {icon}
        {title}
      </Link>
    </StyledNavBarItem>
  );
};

export default NavBarItem;
