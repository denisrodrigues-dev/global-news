import logo from '../../assets/images/logo.png';
import { Container, Logo } from './style';

export default function Header() {
  return (
    <Container>
      <Logo>
        <img src={ logo } alt="" />
      </Logo>
    </Container>
  );
}
