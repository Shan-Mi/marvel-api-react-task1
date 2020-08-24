import React from "react";
import useFetch from "../components/useFetch";

import { useParams } from "react-router-dom";
import CharDetail from "../components/CharDetail";
import Footer from "../components/Footer";

const CharDetailPage = () => {
  const { id } = useParams();

  const [data, isLoading, attrText] = useFetch(
    "https://mock-data-api.firebaseio.com/marvel-characters.json",
    id,
    []
  );

  return (
    <>
      <CharDetail data={data} isLoading={isLoading} />
      <Footer attrText={attrText} />
    </>
  );
};

export default CharDetailPage;
