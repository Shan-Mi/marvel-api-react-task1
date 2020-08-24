import React from "react";
import HomepageWrapper from "./Homepage.styles";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <HomepageWrapper>
      <Link to="/characters">
        <h1>Check your favorite Marvel Characters</h1>
      </Link>
    </HomepageWrapper>
  );
}
