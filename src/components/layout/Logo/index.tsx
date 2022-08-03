import React from "react";
import { StyledLogo } from "./Logo.styled";
import { Link } from "react-router-dom";

interface Props {
  logo: string;
  alt: string;
}

const Logo = ({ logo, alt }: Props) => {
  return (
    <StyledLogo>
      <Link to={"/"}>
        <img src={logo} alt={alt} />
      </Link>
    </StyledLogo>
  );
};

export default Logo;
