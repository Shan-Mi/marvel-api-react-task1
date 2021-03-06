import styled, { css } from "styled-components";

const changePage = css`
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  width: max-content;

  &:nth-child(1)::before {
    content: "⬅";
  }
  &:nth-child(4)::after {
    content: "➡";
  }

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: all 200ms ease-in;
  }
`;

const buttonStyles = css`
  background-color: #007bff;
  color: #fff;
  border: none;

  &:hover {
    background-color: white;
    color: #007bff;
    border: 1px solid #007bff;
    transition: all 200ms ease-in;
  }
`;

const getButtonStyles = (props) => {
  if (props.changePage) {
    return changePage;
  }
  return buttonStyles;
};

export const CustomButtonContainer = styled.button`
  /* min-width: 165px; */
  width: 250px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-right: 2rem;

  ${getButtonStyles}
`;
