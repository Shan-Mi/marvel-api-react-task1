import React from "react";

import WithSpinner from "./WithSpinner";
import { HeaderContainer } from "./CharDetail.styles";
import DetailInfo from "./DetailInfo";
import DetailHeader from "./DetailHeader";
import DetailUrlContainer from "./DetailUrlContainer";

const CharDetail = ({ data, isLoading }) => {
  const {
    id,
    name,
    description,
    thumbnail: { extension, path },
    comics: { available: comicsNumber, items: comicsItems },
    events: { available: eventsNumber, items: eventsItems },
    series: { available: seriesNumber, items: seriesItems },
    stories: { available: storiesNumber, items: storiesItems },
    urls,
  } = data;

  return (
    <div className="detail-page-container">
      <HeaderContainer description={description}>
        <DetailHeader
          name={name}
          id={id}
          extension={extension}
          path={path}
          description={description}
        />
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

        <DetailUrlContainer urls={urls}/>
      </div>
    </div>
  );
};

export default WithSpinner(CharDetail);
