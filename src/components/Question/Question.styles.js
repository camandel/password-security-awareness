import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--lightGrey);
  padding: 0 20px;
  margin: 5px 0;
  border-radius: 20px;
  height: 60px;
  line-height: 60px;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  
  input {
    font-size: var(--fontSmall);
    border-radius: 10px;
    margin: 10px;
    padding: 0 10px;
  }
`;
