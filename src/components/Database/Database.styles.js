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
`;

export const Table = styled.table`
  max-width: var(--maxWidth);
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 20px;
  margin: 25px 0;
  max-width: var(--maxWidth);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 700px) {
    font-size: var(--fontMini);
  }

  thead tr {
    background-color: var(--darkGrey);
    border-radius: 20px 0 0 20px;
    color: #ffffff;
    text-align: left;
  }

  th,
  td {
    padding: 12px 15px;
    border-right: 1px solid #dddddd;

    @media screen and (max-width: 700px) {
      padding: 3px 3px;

      max-width: 100px;
      width: 50px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  th:last-child,
  td:last-child {
    border-right: 0;
    max-width: 100%;
  }

  tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }
`;
