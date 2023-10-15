import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background-color: #B80000;
  height: 5rem;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;

  @media (max-width: 425px) {
    height: 9rem;
  }
`;

export const Logo = styled.section`
  width: 70%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  img {
    width: 6rem;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Search = styled.section`
  @media screen and (max-width: 425px) {
    display: flex;
    align-items: center;
  }

 input {
    width: 15rem;
    height: 2rem;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    border: none;
    padding-left: 1rem;
    font-size: 1rem;
    color: gray;
  }

  input:focus {
    outline: none;
  }

  button {
    width: 2.5rem;
    height: 2rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border: none;
    background-color: #fff;
    color: gray;
    cursor: pointer;
    border-left: #EEEEEE 1px solid;
  }
`;
