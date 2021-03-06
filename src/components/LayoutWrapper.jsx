import React from "react";
import { Link } from "react-router-dom";
import MyButton from "./MyButton/MyButton";
import { HeaderContainer } from "./DetailPageComponents/DetailLayout.styles";

export default function LayoutSimple({ children }) {
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <MyButton>Home</MyButton>
        </Link>
        <Link to="/characters">
          <MyButton>Go to Characters List</MyButton>
        </Link>
      </HeaderContainer>
      {children}
    </>
  );
}
