import React from "react";

import WithSpinner from "./WithSpinner";
import { HeaderContainer, NameListContainer } from "./CharDetail.styles";
import DetailInfoContainer from "./DetailInfoContainer";
import PageSwitcher from "./PageSwitcher";

const CharDetail = ({ data, isLoading, link , history}) => {
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
     <PageSwitcher link={link} history={history} /> 
      <HeaderContainer>
        <div>
          <h1>{name}</h1>
          <h3>{id}</h3>
        </div>
        <img src={`${path}.${extension}`} alt={`${name}`} />
      </HeaderContainer>
      <div className="detail-page-info-body">
        <div className="detail-page-comics">
          <h3>{`Available comics amount: ${comicsNumber}`}</h3>
          <NameListContainer>
            {comicsNumber === 0 ? (
              <DetailInfoContainer />
            ) : (
              comicsItems.map((item, i) => (
                <DetailInfoContainer key={i} item={item} />
              ))
            )}
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

        <div className="detail-page-events">
          <h3>{`Available series amount: ${seriesNumber}`}</h3>
          <NameListContainer>
            {seriesNumber === 0 ? (
              <DetailInfoContainer />
            ) : (
              seriesItems.map((item, i) => (
                <DetailInfoContainer key={i} item={item} />
              ))
            )}
          </NameListContainer>
        </div>

        <div className="detail-page-stories">
          <h3>{`Available stories amount: ${storiesNumber}`}</h3>
          <NameListContainer>
            {storiesNumber === 0 ? (
              <DetailInfoContainer />
            ) : (
              storiesItems.map((item, i) => (
                <DetailInfoContainer key={i} item={item} />
              ))
            )}
          </NameListContainer>
        </div>
      </div>
    </div>
  );
};

export default WithSpinner(CharDetail);
