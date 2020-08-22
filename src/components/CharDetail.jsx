import React from "react";

import WithSpinner from "./WithSpinner";
import { NameListContainer } from "./CharDetail.styles";
import DetailInfoContainer from "./DetailInfoContainer";

const CharDetail = ({ data, isLoading }) => {
  const {
    id,
    name,
    thumbnail: { extension, path },
    comics: { available: comicsNumber, items: comicsItems },
    events: { available: eventsNumber, items: eventsItems },
    series: { available: seriesNumber, items: seriesItems },
    stories: { available: storiesNumber, items: storiesItems },
  } = data;

  return (
    <div className="detail-page-container">
      <div className="detail-page-header">
        <h1>{name}</h1>
        <h3>{id}</h3>
        <img src={`${path}.${extension}`} alt={`${name}`} />
      </div>
      <div className="detail-page-info-body">
        <div className="detail-page-comics">
          <h3>{`Available comics amount: ${comicsNumber}`}</h3>
          <NameListContainer>
            {comicsItems.map((item, i) => (
              <DetailInfoContainer key={i} item={item} />
            ))}
          </NameListContainer>
        </div>

        <div className="detail-page-events">
          <h3>{`Available events amount: ${eventsNumber}`}</h3>
          <NameListContainer>
            {eventsNumber === 0 ? (
              <DetailInfoContainer />
            ) : (
              eventsItems.map((item, i) => (
                <DetailInfoContainer key={i} item={item} />
              ))
            )}
          </NameListContainer>
        </div>

        <div className="detail-page-stories">
          <h3>{`Available stories amount: ${storiesNumber}`}</h3>
          <NameListContainer>
            {storiesItems.map((item, i) => (
              <DetailInfoContainer key={i} item={item} />
            ))}
          </NameListContainer>
        </div>
      </div>
    </div>
  );
};

export default WithSpinner(CharDetail);
