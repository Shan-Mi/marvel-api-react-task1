import React from "react";
import useFetch from "./useFetch";

import CharDetail from "./CharDetail";

const CharDetailPage = (props) => {
  const id = props.match.params.id;
  const link = props.location.pathname;
  const [data, isLoading] = useFetch(
    "https://mock-data-api.firebaseio.com/marvel-characters.json",
    id,
    []
  );

  return <CharDetail data={data} isLoading={isLoading} link={link} />;
};

export default CharDetailPage;
