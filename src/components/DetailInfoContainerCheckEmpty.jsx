import React from "react";
import EmptyDetail from "./EmptyDetail";

const DetailInfoContainerCheckEmpty = (WrappedComponent) => ({
  isEmpty,
  ...otherProps
}) => {
  return isEmpty ? <EmptyDetail {...otherProps}/> : <WrappedComponent {...otherProps} />;
};

export default DetailInfoContainerCheckEmpty;
