import React, { createContext } from "react";
import useFetch from "../components/useFetch";

// should we write like this: createContext({})??
//maybe then we don't need to destructure data out??
export const CharactersContext = createContext();

const GlobalContext = ({ children }) => {
  const [data, isLoading, attrText] = useFetch(
    "https://mock-data-api.firebaseio.com/marvel-characters.json",
    []
  ); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <CharactersContext.Provider value={{ data, isLoading, attrText }}>
      {children}
    </CharactersContext.Provider>
  );
};

export default GlobalContext;
