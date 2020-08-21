import styled from "styled-components";

const HomepageWrapper = styled.div`
  display: flex;
  padding: 30vh 0;
  margin-top: 2vh;
  justify-content: center;
  align-self: center;
  font-family: "Marvel", sans-serif;
  background: url("https://i.gifer.com/XsZS.gif") no-repeat fixed center;
  background-size: cover;
  border-radius: 10px;

  h1 {
    place-self: center;
    font-size: 3rem;

    &:hover {
      transform: scale(1.1);
      transition: transform 0.2s ease-in-out;
    }
    transition: transform 0.2s ease-in-out 0.2s;
  }
`;
export default HomepageWrapper;
