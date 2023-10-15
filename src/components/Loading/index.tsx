import { ClockLoader } from 'react-spinners';
import { Container } from './style';

export default function Loading() {
  return (
    <Container>
      <ClockLoader color="#B80000" size={ 150 } />
    </Container>
  );
}
