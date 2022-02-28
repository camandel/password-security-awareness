import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 30px 20px;
 
  h1 {
    color: var(--medGrey);
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Table = styled.table` 
  //position: relative;
  max-width: var(--maxWidth);
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 20px;
  margin: 25px 0;
  max-width: var(--maxWidth);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  //display: table;

  thead tr {
    background-color: var(--darkGrey);
    border-radius:  20px 0 0 20px;
    color: #ffffff;
    text-align: left;
  }

  th,td {
      padding: 12px 15px;
      border-right: 1px solid #dddddd;
  }

  th:last-child,td:last-child {
      border-right: 0;
  }

  tr:nth-of-type(even) {
      background-color: #f3f3f3;
  }

  @media screen and (max-width: 720px) {
    font-size: var(--fontSmall);
  }
`;
