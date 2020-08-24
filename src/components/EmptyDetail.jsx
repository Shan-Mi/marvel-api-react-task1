import React from "react";

const EmptyDetail = ({ catagory, amount }) => {
  return (
    <div>
      <h3>{`Available ${catagory} amount: ${amount}`}</h3>
    </div>
  );
};

export default EmptyDetail;
