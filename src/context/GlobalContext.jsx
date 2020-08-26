import React, { createContext } from "react";
import useFetch from "../components/useFetch";

export const CharactersContext = createContext();

const GlobalContext = (props) => {
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

export default GlobalContext;
