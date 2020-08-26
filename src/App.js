import React, { createContext } from "react";
import CharListPage from "./pages/CharListPage";
import { Switch, Route } from "react-router-dom";

import LayoutWrapper from "./components/LayoutWrapper";
import DetailLayout from "./components/DetailLayout";
import Homepage from "./pages/Homepage";
import CharDetailPage from "./pages/CharDetailPage";

import "./App.css";
import { GlobalStyle } from "./components/GlobalStyle.styles.jsx";
import "bootstrap/dist/css/bootstrap.css";
import useFetch from "./components/useFetch";

export const CharactersContext = createContext();

export const CharactersProvider = (props) => {
  const [data, isLoading, attrText] = useFetch(
    "https://mock-data-api.firebaseio.com/marvel-characters.json",
    "preview",
    []
  ); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <CharactersContext.Provider value={{ data, isLoading, attrText }}>
      {props.children}
    </CharactersContext.Provider>
  );
};

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

        <Route
          path="/characters/:id"
          exact
          render={(props) => (
            <DetailLayout>
              <CharDetailPage {...props} />
            </DetailLayout>
          )}
        ></Route>

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
