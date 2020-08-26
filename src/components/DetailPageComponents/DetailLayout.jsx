import React from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import MyButton from "../MyButton/MyButton";
import { HeaderContainer } from "./DetailLayout.styles";

export default function DetailLayout({ children }) {
  const { pathname } = useLocation();
  const pageIndex = [.../\d+$/.exec(pathname)];
  const pageURL = pathname.replace(pageIndex, "");
  const pagePrev = pageIndex == 0 ? 19 : pageIndex - 1;
  const pageNext = pageIndex == 19 ? 0 : Number(pageIndex) + 1;

  let history = useHistory();

  function handleClickPrev() {
    history.push(`${pageURL}${pagePrev}`);
  }

  function handleClickNext() {
    history.push(`${pageURL}${pageNext}`);
  }

  return (
    <>
      <HeaderContainer>
        <MyButton changePage="true" onClick={handleClickPrev}>
          Go to previous page
        </MyButton>
        <Link to="/">
          <MyButton>Home</MyButton>
        </Link>
        <Link to="/characters">
          <MyButton>Go to Characters List</MyButton>
        </Link>
        <MyButton changePage="true" onClick={handleClickNext}>
          Go to next page
        </MyButton>
      </HeaderContainer>
      {children}
    </>
  );
}
