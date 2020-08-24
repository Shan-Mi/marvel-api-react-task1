import React from "react";

const DetailInfoContainer = ({ items: { name } }) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default DetailInfoContainer;
