import styled from "styled-components";

export const ImageContainer = styled.div`
  display: block;

  img {
    object-fit: cover;
    width: 300px;
    height: 300px;
    margin: auto;
    display: block;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;
export const CharItemContainer = styled.div`
  /* width: 1rem; */
  width: 300px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 1px 0 #3e2020;
  border-radius: 10px;

  h1 {
    text-align: center;
  }
`;
