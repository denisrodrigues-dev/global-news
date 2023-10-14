import { useContext } from 'react';
import { filterButtons } from '../../data';
import Button from '../Button';
import { Container } from './style';
import NewsContext from '../../context/NewsContext';

export default function FilterButtons() {
  const { filterNews, currentFilter } = useContext(NewsContext);

  return (
    <Container>
      {filterButtons.map(({ id, name }) => (
        <Button
          key={ id }
          className={ currentFilter === name ? 'active-btn' : 'btn' }
          handleClick={ () => filterNews(name) }
        >
          {name}
        </Button>
      ))}
    </Container>
  );
}
