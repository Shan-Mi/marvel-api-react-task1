import React, { useState, useEffect } from "react";
import CharList from "../components/CharList";

export default function CharListPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const fetcher = await fetch(
        "https://mock-data-api.firebaseio.com/marvel-characters.json"
      );
      const response = await fetcher.json();
      // console.log(response.data.results);
      setData(response.data.results);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      <CharList data={data} isLoading={isLoading} />
    </div>
  );
}
