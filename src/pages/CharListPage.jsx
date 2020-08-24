import React from "react";
import CharList from "../components/CharList";
import useFetch from "../components/useFetch";
import WithSpinner from "../components/WithSpinner";
import Footer from "../components/Footer";

function CharListPage() {
  const [data, isLoading, attrText] = useFetch(
    "https://mock-data-api.firebaseio.com/marvel-characters.json",
    "preview",
    []
  );// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <CharList data={data} isLoading={isLoading}  />
      <Footer attrText={attrText} />
    </>
  );
}

export default WithSpinner(CharListPage);
