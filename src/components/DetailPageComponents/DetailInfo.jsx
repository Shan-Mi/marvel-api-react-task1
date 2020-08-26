import React from "react";
import DetailInfoContainerCheckEmpty from "./DetailInfoContainerCheckEmpty";

import { NameListContainer } from "./CharDetail.styles";
import DetailInfoContainer from "./DetailInfoContainer";

const DetailInfo = ({ catagory, amount, items }) => {
  return (
    <div>
      <h3>{`Available ${catagory} amount: ${amount}`}</h3>
      <NameListContainer>
        {items.map((items, i) => (
          <DetailInfoContainer key={i} items={items} />
        ))}
      </NameListContainer>
    </div>
  );
};

export default DetailInfoContainerCheckEmpty(DetailInfo);
