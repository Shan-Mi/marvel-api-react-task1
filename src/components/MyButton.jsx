import React from "react";
import { CustomButtonContainer } from "./MyButton.styles";

const MyButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default MyButton;
