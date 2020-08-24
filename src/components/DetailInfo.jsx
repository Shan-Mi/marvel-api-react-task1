import React from "react";
import DetailInfoContainerCheckEmpty from "./DetailInfoContainerCheckEmpty";

import { NameListContainer } from "./CharDetail.styles";
import DetailInfoContainer from "./DetailInfoContainer";

const DetailInfo = ({ catagory, amount, items }) => {
  const isEmpty = !!amount;
  return (
    <div>
      <h3>{`Available ${catagory} amount: ${amount}`}</h3>
      <NameListContainer>
        {!isEmpty ? (
          <DetailInfoContainer items={items} />
        ) : (
          items.map((items, i) => <DetailInfoContainer key={i} items={items} />)
        )}
      </NameListContainer>
    </div>
  );
};

export default DetailInfoContainerCheckEmpty(DetailInfo);
