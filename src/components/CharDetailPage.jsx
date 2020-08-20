import React, { useState, useEffect } from "react";
import CharItem from "./CharItem";

export default function CharDetailPage(props) {
  // console.log(props);

  const id = props.match.params.id;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const fetcher = await fetch(
        "https://mock-data-api.firebaseio.com/marvel-characters.json"
      );
      const response = await fetcher.json();
      const result = response.data.results;
      // console.log(response.data.results);
      setData(result[id]);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      <CharItem data={data} isLoading={isLoading} index={id} />
    </div>
  );
}
