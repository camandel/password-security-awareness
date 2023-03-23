import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--lightGrey);
  padding: 0 20px;
  margin: 5px 0;
  border-radius: 20px;
  height: 60px;
  line-height: 60px;

  @media screen and (max-width: 985px) {
    height: 50px;
    line-height: 10px;
  }

  @media screen and (max-width: 700px) {
    border-radius: 10px;
    height: 30px;
    line-height: 10px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  input {
    font-size: var(--fontSmall);
    border-radius: 10px;
    margin: 10px;
    padding: 0 10px;

    @media screen and (max-width: 700px) {
      font-size: var(--fontMini);
      margin: 0px;
      padding: 0px;
    }
  }

  div {
    @media screen and (max-width: 700px) {
      font-size: var(--fontMini);
      margin: 0px;
      padding: 0 5px;
    }
  }
  p {
    font-size: var(--fontSmall);
    color: var(--white);
    @media screen and (max-width: 700px) {
      font-size: var(--fontMini);
    }
  }
`;
