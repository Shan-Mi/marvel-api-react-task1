import { useState, useEffect } from "react";

export default function useFetch(url, id, dependencies) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [attrText, setAttrText] = useState("");

  function fetchData() {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((result) => {
        id === "preview"
          ? setData(result.data.results)
          : setData(result.data.results[id]);
        setAttrText(result.attributionText);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, dependencies);// eslint-disable-line react-hooks/exhaustive-deps

  return [data, isLoading, attrText];
}
