import { useContext } from 'react';
import { filterButtons } from '../../data';
import Button from '../Button';
import { Container } from './style';
import NewsContext from '../../context/NewsContext';

export default function FilterButtons() {
  const { filterNews } = useContext(NewsContext);

  return (
    <Container>
      {filterButtons.map(({ id, name }) => (
        <Button handleClick={ () => filterNews(name) } key={ id }>
          {name}
        </Button>
      ))}
    </Container>
  );
}
