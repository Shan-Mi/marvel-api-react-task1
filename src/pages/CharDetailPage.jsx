import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { CharactersContext } from "../context/GlobalContext";

import CharDetail from "../components/DetailPageComponents/CharDetail";
import Footer from "../components/Footer/Footer";

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

export default CharDetailPage;
