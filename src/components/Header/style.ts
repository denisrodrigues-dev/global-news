import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background-color: #B80000;
  height: 5rem;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
`;

export const Logo = styled.section`
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  img {
    width: 6rem;
  }
`;

export const Search = styled.section`
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
