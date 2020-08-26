import React from "react";
import CharListPage from "./pages/CharListPage";
import { Switch, Route } from "react-router-dom";

import LayoutWrapper from "./components/LayoutWrapper";
import DetailLayout from "./components/DetailPageComponents/DetailLayout";
import Homepage from "./pages/Homepage";
import CharDetailPage from "./pages/CharDetailPage";

import "./App.css";
import { GlobalStyle } from "./components/GlobalStyle.styles.jsx";

function App() {
  // const CharsListData = useContext(CharactersContext);
  // const { isLoading } = CharsListData;

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
