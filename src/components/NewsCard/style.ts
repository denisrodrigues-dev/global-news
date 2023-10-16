import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 19rem;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  gap: 1rem;
  flex-grow: 1;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  align-items: center;

  .favorite-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;

    img {
      width: 1.6rem;
    }
  }
`;

export const Image = styled.section`
  img {
    width: 100%;
  }
`;

export const Text = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 1rem;
  }
`;

export const LinkNews = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  section {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: gray;
  }

  a {
    text-decoration: none;
    background-color: #B80000;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: bold;
    color: #fff;
    padding: 0.5rem;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  a:hover {
    background-color: #A40000;
  }
`;
