import React, { useContext } from "react";
import CharList from "../components/CharList";
// import useFetch from "../components/useFetch";
import WithSpinner from "../components/WithSpinner";
import Footer from "../components/Footer";
import { CharactersContext } from "../context/GlobalContext";

function CharListPage() {
  const CharsListData = useContext(CharactersContext);
  const { data, isLoading, attrText } = CharsListData;
  return (
    <>
      <CharList data={data} isLoading={isLoading} />
      <Footer attrText={attrText} />
    </>
  );
}

export default WithSpinner(CharListPage);
