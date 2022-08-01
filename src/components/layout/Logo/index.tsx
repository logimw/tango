import React from "react";
import { StyledLogo } from "./Logo.styled";

interface Props {
  logo: string;
  alt: string;
}

const Logo = ({ logo, alt }: Props) => {
  return (
    <StyledLogo>
      <img src={logo} alt={alt} />
    </StyledLogo>
  );
};

export default Logo;
