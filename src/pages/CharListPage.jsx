import React, { useContext } from "react";
import CharList from "../components/PreviewPageComponents/CharList";
import WithSpinner from "../components/WithSpinner/WithSpinner";
import Footer from "../components/Footer/Footer";
import { CharactersContext } from "../context/GlobalContext";

function CharListPage() {
  const CharsListData = useContext(CharactersContext);
  const { data, isLoading, attrText } = CharsListData;
  return (
    <>
      <CharList data={data} isLoading={isLoading} />
      <Footer attrText={attrText} />
    </>
  );
}

export default WithSpinner(CharListPage);
