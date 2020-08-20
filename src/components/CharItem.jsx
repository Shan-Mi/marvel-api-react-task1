import React from "react";
import "./CharItem.scss";
import { Link } from "react-router-dom";

export default function CharItem({ data }) {
  const {
    id,
    name,
    thumbnail: { extension, path },
    comics: { available, items },
    stories,
  } = data;
  return (
    <div className="char-item-container mr-5">
      <div className="image-container mr-3">
        <img
          className="thumbnail-resize"
          src={`${path}.${extension}`}
          alt={`${name}`}
        />
      </div>

      <Link to={`/characters/${id}`}><h1 className='text-center'>{name}</h1></Link>
      <p className='text-center'>{`Comics Available Number: ${available}`}</p>
    </div>
  );
}

/* 
correct path:
path + extension

*/
