import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { GlobalStyle } from "styles/GlobalStyle";

import "./App.css";
import MainTemplate from "./components/templates/MainTemplate";
import Table from "./components/Table";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <Table />
      </MainTemplate>
    </ThemeProvider>
  );
}

export default App;
