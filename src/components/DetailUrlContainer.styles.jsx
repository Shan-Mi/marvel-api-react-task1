import styled from "styled-components";

export const UrlContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  margin-right: auto;

  div {
    flex-basis: 15%;
    display: flex;
    /* justify-content: center; */
    /* flex-direction: column; */
    /* align-items: center; */

    a {
      text-transform: capitalize;
      font-size: 1.75rem;

      &::after {
        content: " Link";
      }

      &:hover {
        font-style: italic;
        transition: all 250ms ease-in-out;
      }
      transition: all 200ms ease-out;
    }
  }
`;
