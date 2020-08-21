import React from "react";
import CharItem from "./CharItem";
import useFetch from "./useFetch";

const CharDetailPage = (props) => {
  const id = props.match.params.id;
  const [data, isLoading] = useFetch(
    "https://mock-data-api.firebaseio.com/marvel-characters.json",
    id,
    []
  );

  return <CharItem data={data} isLoading={isLoading} index={id} />;
};

export default CharDetailPage;
