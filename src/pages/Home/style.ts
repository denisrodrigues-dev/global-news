import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #E8EEF2;
  width: 70%;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  min-height: 88vh;

  .more-btn {
    margin-top: 20px;
    margin-bottom: 20px;
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

  @media (max-width: 425px) {
    width: 100%;
  }
`;
