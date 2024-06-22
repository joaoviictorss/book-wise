"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { StyledLink } from "./style";

interface LinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "white" | "purple";
  icon?: "front" | "back";
  size: "medium" | "small";
  onclick?: () => void;
  children: React.ReactNode;
}

const IconLink = ({ variant, icon, size, children, ...props }: LinkProps) => {
  return (
    <StyledLink
      variant={variant}
      size={size}
      onClick={() => onclick}
      {...props}
    >
      {icon === "back" && <ChevronLeft size={18} />}
      {children}
      {icon === "front" && <ChevronRight size={18} />}
    </StyledLink>
  );
};

export default IconLink;
