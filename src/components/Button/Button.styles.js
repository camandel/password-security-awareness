import styled from "styled-components";

export const Wrapper = styled.button`
  background: var(--darkGrey);
  width: 80px;
  min-width: 80px;
  border-radius: 20px;
  color: var(--white);
  border: 0;
  font-size: var(--fontSmall);
  transition: all 0.3s;
  outline: none;
  cursor: pointer;
  margin: 20px;

  @media screen and (max-width: 700px) {
    font-size: var(--fontMini);
    width: 50px;
    min-width: 50px;
    border-radius: 10px;
    margin: 5px 0px;
  }

  :hover {
    opacity: 0.8;
  }
`;
