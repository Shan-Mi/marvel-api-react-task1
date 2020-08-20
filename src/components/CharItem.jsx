import React from "react";
import "./CharItem.scss";

export default function CharItem({ data }) {
  const {
    id,
    name,
    thumbnail: { extension, path },
    comics: { available, items },
    stories,
  } = data;
  return (
    <div className="char-item-container">
      <img
        className="thumbnail-resize"
        src={`${path}.${extension}`}
        alt={`${name}`}
      />
      <h2>{id}</h2>
      <p>{name}</p>
      <p>{`Comics Available Number: ${available}`}</p>
    </div>
  );
}

/* 
correct path:
path + extension

*/
