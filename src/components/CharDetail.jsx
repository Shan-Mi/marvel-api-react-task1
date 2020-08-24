import React from "react";

import WithSpinner from "./WithSpinner";
import { HeaderContainer } from "./CharDetail.styles";
import PageSwitcher from "./PageSwitcher";
import DetailInfo from "./DetailInfo";

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
    <div className="detail-page-container" style={{ position: "relative" }}>
      <PageSwitcher />
      <HeaderContainer>
        <div>
          <h1>{name}</h1>
          <h3>
            <span>ID: </span>
            {id}
          </h3>
        </div>
        <img src={`${path}.${extension}`} alt={`${name}`} />
      </HeaderContainer>
      <div className="detail-page-info-body">
        <DetailInfo
          catagory={"comics"}
          isEmpty={!comicsNumber}
          amount={comicsNumber}
          items={comicsItems}
        />
        <DetailInfo
          catagory={"events"}
          isEmpty={!eventsNumber}
          amount={eventsNumber}
          items={eventsItems}
        />
        <DetailInfo
          catagory={"series"}
          isEmpty={!seriesNumber}
          amount={seriesNumber}
          items={seriesItems}
        />
        <DetailInfo
          catagory={"stories"}
          isEmpty={!storiesNumber}
          amount={storiesNumber}
          items={storiesItems}
        />
      </div>
    </div>
  );
};

export default WithSpinner(CharDetail);
