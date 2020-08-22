import React from "react";

const DetailInfoContainer = ({ item: { name } = "empty" }) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default DetailInfoContainer;
