import React from "react";
import { UrlContainer } from "./DetailUrlContainer.styles";

const DetailUrlContainer = ({ urls }) => {
  return (
    <UrlContainer>
      {urls.map((item, i) => (
        <div key={i}>
          <a href={i} target="_blank" rel="noopener noreferrer">
            {item.type}
          </a>
        </div>
      ))}
    </UrlContainer>
  );
};

export default DetailUrlContainer;
