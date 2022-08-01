import React from "react";
import { StyledFooter } from "./Footer.styled";

const Footer = () => {
  const date = new Date();
  return (
    <StyledFooter>
      Copyright {date.getFullYear()} © Tango. All right reserved.
    </StyledFooter>
  );
};

export default Footer;
