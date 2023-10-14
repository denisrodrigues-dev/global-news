import styled from 'styled-components';

export const FeaturedCard = styled.section`
  display: flex;
  padding: 1.5rem;
`;

export const Image = styled.section`
  width: 60%;
  img {
    width: 90%;
  }
`;

export const Text = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  gap: 1rem;

  .introFeatured {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-weight: bold;
      color: #B80000;
    }

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;

      img {
        width: 1.3rem;
      }
    }
  }

  span {
    color: gray;
  }

  
`;

export const ButtonLink = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  button {
    background-color: #B80000;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }  
`;
