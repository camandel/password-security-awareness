import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 30px 20px;

  h1 {
    color: var(--medGrey);
  }

  h1 {
    @media screen and (max-width: 700px) {
      font-size: var(--fontSmall);
    }
  }

  p {
    color: var(--medGrey);
  }
`;
