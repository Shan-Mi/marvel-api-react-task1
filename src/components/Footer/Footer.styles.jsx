import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 12rem;

  &::before {
    content: "";
    width: 100%;
    height: 1px;
    background: #282828;
    margin-bottom: 1rem;
  }
`;
