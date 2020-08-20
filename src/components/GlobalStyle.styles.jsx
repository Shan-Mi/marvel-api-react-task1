import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 20px 60px;
    background-color: #d1ccc0;
    height: 100vh;
    // background: url('https://i.gifer.com/XsZS.gif') no-repeat fixed center;
    // background-size: cover;

    @media screen and (max-width: 800px)  {
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
    font-family: "Marvel", sans-serif;
  }
`;
