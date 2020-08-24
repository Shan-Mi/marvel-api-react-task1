import React from "react";
import CharItem from "./CharItem";
import { CharListContainer } from "./CharListContainer";
import WithSpinner from "./WithSpinner";

const CharList = ({ data, isLoading }) => {
  return (
    <CharListContainer>
      {data.map((item, index) => (
        <CharItem
          key={item.id}
          isLoading={isLoading}
          data={item}
          index={index}
        />
      ))}
    </CharListContainer>
  );
};

export default WithSpinner(CharList);
