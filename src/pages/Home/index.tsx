import { useContext } from 'react';
import Button from '../../components/Button';
import FeaturedNewsCard from '../../components/FeaturedNewsCard';
import FilterButtons from '../../components/FilterButtons';
import NewsCardList from '../../components/NewsCardList';
import { Container } from './style';
import NewsContext from '../../context/NewsContext';

export default function Home() {
  const { addQuantityNews, newsFilterData } = useContext(NewsContext);

  return (
    <Container>
      <FeaturedNewsCard />
      <FilterButtons />
      <NewsCardList />
      {newsFilterData.length > 9 && (
        <Button
          className="more-btn"
          handleClick={ addQuantityNews }
        >
          MAIS NOTÍCIAS
        </Button>
      )}
    </Container>
  );
}
