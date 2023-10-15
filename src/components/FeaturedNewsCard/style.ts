import styled from 'styled-components';

export const FeaturedCard = styled.section`
  display: flex;
  padding: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Image = styled.section`
  width: 60%;
  img {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
    img {
      width: 100%;
    }
  }
`;

export const Text = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }

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
        width: 1.5rem;
      }
    }
  }

  span {
    color: gray;
  }

  
`;

export const LinkNews = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  a {
    text-decoration: none;
    background-color: #B80000;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  a:hover {
    background-color: #A40000;
  }
`;
