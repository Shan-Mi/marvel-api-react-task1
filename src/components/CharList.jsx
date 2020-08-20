import React from "react";
import CharItem from "./CharItem";
import WithSpinner from "./WithSpinner";

import "./CartList.scss";

const CharList = ({ data, isLoading }) => {
  return (
    <div className="char-list-container">
      {data.map((item) => (
        <CharItem key={item.id} isLoading={isLoading} data={item} />
      ))}
    </div>
  );
};

export default WithSpinner(CharList);
