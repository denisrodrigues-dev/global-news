import FeaturedNewsCard from '../../components/FeaturedNewsCard';
import FilterButtons from '../../components/FilterButtons';
import { Container } from './style';

export default function Home() {
  return (
    <Container>
      <FeaturedNewsCard />
      <FilterButtons />
    </Container>
  );
}
