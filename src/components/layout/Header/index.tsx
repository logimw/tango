import React from "react";
import { StyledHeader } from "./Header.styled";
import Logo from "../Logo";
import LogoImg from "assets/img/got-starks.png";

const Header = () => {
  return (
    <StyledHeader>
      <Logo logo={LogoImg} alt="Logo got" />
    </StyledHeader>
  );
};

export default Header;
