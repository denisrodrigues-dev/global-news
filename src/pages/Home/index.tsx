import Button from '../../components/Button';
import FeaturedNewsCard from '../../components/FeaturedNewsCard';
import FilterButtons from '../../components/FilterButtons';
import NewsCardList from '../../components/NewsCardList';
import { Container } from './style';

export default function Home() {
  return (
    <Container>
      <FeaturedNewsCard />
      <FilterButtons />
      <NewsCardList />
      <Button>MAIS NOTÍCIAS</Button>
    </Container>
  );
}
