import React from "react";
import { FooterContainer } from "./Footer.styles";

const Footer = ({ attrText }) => {
  return (
    <FooterContainer>
      <h4>{attrText}</h4>
      <h5>By Shan Mi from Nackademin | {new Date().toDateString()}</h5>
    </FooterContainer>
  );
};

export default Footer;
