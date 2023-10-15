import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
  background-color: #B80000;
  width: 100%;

  button {
  background-color: transparent;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
  width: 8rem;
  height: 2rem;
  }

  .active-btn {
    border-bottom: 5px solid #fff;
  }

  .btn:hover {
    color: #B80000;
    background-color: #fff;
    border-radius: 0.5rem;
  }

  @media (max-width: 425px) {
    button {
      font-size: 0.8rem;
    }

    .active-btn {
      border-bottom: 3px solid #fff;
    }
  }
`;
