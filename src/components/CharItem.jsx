import React from "react";
import { Link } from "react-router-dom";
import { ImageContainer, CharItemContainer } from "./CharItem.styles";

const CharItem = ({ data, index }) => {
  const {
    // id,
    name,
    thumbnail: { extension, path },
    comics: { available },
  } = data;

  return (
    <CharItemContainer>
      <Link to={`/characters/${index}`}>
        <ImageContainer>
          <img src={`${path}.${extension}`} alt={`${name}`} />
        </ImageContainer>
      </Link>

      <Link to={`/characters/${index}`}>
        <h1>{name}</h1>
      </Link>
      <p>{`Comics Available Number: ${available}`}</p>
    </CharItemContainer>
  );
};

export default CharItem;
/* 
correct path:
path + extension
*/
