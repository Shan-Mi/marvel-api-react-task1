import React from "react";
import { FooterContainer } from "./Footer.styles";

const Footer = ({ attrText }) => {
  return (
    <FooterContainer>
      <h5>{attrText}</h5>
    </FooterContainer>
  );
};

export default Footer;
