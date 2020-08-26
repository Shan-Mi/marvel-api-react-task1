import React, { useContext } from "react";
// import useFetch from "../components/useFetch";

import { useParams } from "react-router-dom";
import WithSpinner from "../components/WithSpinner";

import { CharactersContext } from "../context/GlobalContext";
import CharDetail from "../components/CharDetail";
import Footer from "../components/Footer";

const CharDetailPage = () => {
  let { id } = useParams();
  const CharsListData = useContext(CharactersContext);
  const { data, isLoading, attrText } = CharsListData;

  return (
    <>
      <CharDetail data={data} isLoading={isLoading} pageIndex={id} />
      <Footer attrText={attrText} />
    </>
  );
};

export default WithSpinner(CharDetailPage);
