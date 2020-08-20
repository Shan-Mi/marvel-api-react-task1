import React from "react";
import "./App.css";
import CharListPage from "./pages/CharListPage";
import { Switch, Route } from "react-router-dom";
import LayoutWrapper from "./components/LayoutWrapper";
import Homepage from "./pages/Homepage";

import { GlobalStyle } from "./components/GlobalStyle.styles.jsx";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <LayoutWrapper>
            <Homepage />
          </LayoutWrapper>
        </Route>

        <Route path="/characters">
          <LayoutWrapper>
            <CharListPage />
          </LayoutWrapper>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
