import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
  width: 70%;
  background-color: #E8EEF2;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width : 425px) {
    width: 100%;
  }
`;
