import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "assets/fonts/Game_of_Thrones.ttf";
import { CharactersProvider } from "./providers/CharactersProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CharactersProvider>
        <App />
      </CharactersProvider>
    </BrowserRouter>
  </React.StrictMode>
);
