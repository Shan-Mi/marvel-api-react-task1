import React from "react";
import { FooterContainer } from "./Footer.styles";

const Footer = ({ attrText }) => {
  return (
    <FooterContainer>
      <h5>{attrText}</h5>
      <h6>By Shan Mi from Nackademin | {new Date().toDateString()}</h6>
    </FooterContainer>
  );
};

export default Footer;
