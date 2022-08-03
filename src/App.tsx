import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { GlobalStyle } from "styles/GlobalStyle";
import House from "views/House";
import Characters from "views/Characters";
import MainTemplate from "components/templates/MainTemplate";
import { Container } from "components/templates/MainTemplate.styled";
import "styles/font.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <Container>
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="houses/:id" element={<House />} />
          </Routes>
        </Container>
      </MainTemplate>
    </ThemeProvider>
  );
}

export default App;
