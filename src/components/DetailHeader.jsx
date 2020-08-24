import React from "react";

const DetailHeader = ({ name, id, path, extension }) => {
  return (
    <>
      <div>
        <h1>{name}</h1>
        <h3>
          <span>ID: </span>
          {id}
        </h3>
      </div>
      <img src={`${path}.${extension}`} alt={`${name}`} />
    </>
  );
};

export default DetailHeader;
