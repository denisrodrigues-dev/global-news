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
