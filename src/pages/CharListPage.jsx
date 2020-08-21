import React from "react";
import CharList from "../components/CharList";
import useFetch from "../components/useFetch";
import WithSpinner from "../components/WithSpinner";

function CharListPage() {
  const [data, isLoading] = useFetch(
    "https://mock-data-api.firebaseio.com/marvel-characters.json",
    "preview",
    []
  );

  return <CharList data={data} isLoading={isLoading} />;
}

export default WithSpinner(CharListPage);
