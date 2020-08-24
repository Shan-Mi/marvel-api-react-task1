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
    justify-content: center;

    h1 {
      font-size: 3.5rem;
      margin-right: auto;
    }

    h3,
    h5 {
      text-indent: 2rem;
      margin-right: auto;

      /* text-align: center; */
      span {
        font-weight: bold;
      }
    }

    h5 {
      font-style: italic;

      &:before,
      &:after {
        ${(props) => (props.description ? `content: '"';` : "")}
      }
    }
  }
  img {
    width: 30vw;
    max-width: 300px;
    margin: auto;
  }
`;
