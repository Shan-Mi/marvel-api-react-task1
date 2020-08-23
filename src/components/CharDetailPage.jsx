import React from "react";
import useFetch from "./useFetch";

import { useParams } from "react-router-dom";
import CharDetail from "./CharDetail";

const CharDetailPage = () => {
  // const id = props.match.params.id;
  const { id } = useParams();

  const [data, isLoading] = useFetch(
    "https://mock-data-api.firebaseio.com/marvel-characters.json",
    id,
    []
  );

  return <CharDetail data={data} isLoading={isLoading} />;
};

export default CharDetailPage;
