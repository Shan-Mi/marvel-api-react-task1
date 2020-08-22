import React from "react";

const DetailInfoContainer = ({ item: { name } = {} }) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default DetailInfoContainer;
