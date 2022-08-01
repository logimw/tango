import React from "react";
import { StyledBackground } from "./Background.styled";
import BackgroundImg from "assets/img/got-bg.png";

const Background = () => {
  return (
    <StyledBackground>
      <img src={BackgroundImg} alt="GOT Background" />
    </StyledBackground>
  );
};

export default Background;
