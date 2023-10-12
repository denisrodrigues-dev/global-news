import logo from '../../assets/images/logo.png';
import { Container, Logo } from './style';

export default function Header() {
  return (
    <Container>
      <Logo>
        <img src={ logo } alt="imagem da logo do header" />
      </Logo>
    </Container>
  );
}
