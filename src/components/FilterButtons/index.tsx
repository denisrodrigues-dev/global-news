import { filterButtons } from '../../data';
import Button from '../Button';
import { Container } from './style';

export default function FilterButtons() {
  return (
    <Container>
      {filterButtons.map(({ id, name }) => (
        <Button key={ id }>
          {name}
        </Button>
      ))}
    </Container>
  );
}
