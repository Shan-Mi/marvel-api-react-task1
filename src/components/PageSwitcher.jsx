import React from "react";
import { Link } from "react-router-dom";

const PageSwitcher = ({ link, history }) => {
  const pageIndex = [.../\d+$/.exec(link)];
  const pageURL = link.replace(pageIndex, "");
  const pagePrev = pageIndex == 0 ? 19 : pageIndex - 1;
  const pageNext = pageIndex == 19 ? 0 : Number(pageIndex) + 1;

  return (
    <div>
      {/*       <p>{link}</p>
      <p>{pageIndex}</p>
      <p>{pageURL}</p>
      <p>{pageURL}{pagePrev}</p>
      <p>{pageURL}{pageNext}</p> */}

      <Link to={`${pageURL}${pagePrev}`} onClick={()=> history.push(`${pageURL}${pagePrev}`)}>Go to previous page</Link>
      <Link to={`${pageURL}${pageNext}`}>Go to next page</Link>
    </div>
  );
};

export default PageSwitcher;
