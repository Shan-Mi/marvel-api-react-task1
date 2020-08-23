import React from "react";
import { useHistory, withRouter, useLocation, Link } from "react-router-dom";
import MyButton from "./MyButton";
import { ButtonsWrapper } from "./ButtonsWrapper.styles";

const PageSwitcher = () => {
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
    <ButtonsWrapper>
      <Link to={`${pageURL}${pagePrev}`}><MyButton onClick={handleClickPrev}>Go to previous page</MyButton></Link>
      <MyButton onClick={handleClickNext}>Go to next page</MyButton>
    </ButtonsWrapper>
  );
};

export default withRouter(PageSwitcher);
