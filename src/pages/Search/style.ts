import styled from 'styled-components';

export const Container = styled.section`
  width: 70%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  background-color: #E8EEF2;
  margin: 0 auto;
  padding: 1rem;
  min-height: 90vh;
  align-items: center;
  gap: 1rem;

  .more-btn {
    margin-top: 20px;
    margin-bottom: 10px;
    width: 50%;
    height: 40px;
    border: none;
    background-color: #fff;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;

    &:hover {
      background-color: #FCF9F9;
      color: black;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width : 425px) {
    width: 100%;
  }
`;

export const Title = styled.section`
  text-align: center;
  padding: 1rem;
  font-size: 1.5rem;

  @media (max-width : 425px) {
    font-size: 1rem;
  }
`;

export const CardList = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
`;
