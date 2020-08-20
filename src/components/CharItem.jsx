import React from "react";
import "./CharItem.scss";
import { Link } from "react-router-dom";
import WithSpinner from "./WithSpinner";

function CharItem({ data, index, isLoading }) {
  const {
    // id,
    name,
    thumbnail: { extension, path },
    comics: { available, items },
    stories,
  } = data;

  return (
    <div className="char-item-container mr-5">
      <Link to={`/characters/${index}`}>
        <div className="image-container mr-3">
          <img
            className="thumbnail-resize"
            src={`${path}.${extension}`}
            alt={`${name}`}
          />
        </div>
      </Link>

      <Link to={`/characters/${index}`}>
        <h1 className="text-center">{name}</h1>
      </Link>
      <p className="text-center">{`Comics Available Number: ${available}`}</p>
    </div>
  );
}

export default WithSpinner(CharItem);
/* 
correct path:
path + extension

*/
