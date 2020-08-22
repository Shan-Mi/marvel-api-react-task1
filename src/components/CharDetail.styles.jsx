import styled from "styled-components";

export const NameListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  p {
    text-indent: 2rem;
  }
`;

export const HeaderContainer = styled.div`
  margin: 2rem 0;
  display: flex;

  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;

    h1,
    h3 {
      margin-right: auto;
    }
  }
  img {
    width: 30vw;
    max-width: 300px;
    margin: auto;
  }
`;
