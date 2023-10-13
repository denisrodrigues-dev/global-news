import { useState } from 'react';
import logo from '../../assets/images/logo.png';
import Input from '../Input';
import { Container, Logo } from './style';

export default function Header() {
  const [searchNews, setSearchNews] = useState('');

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchNews(value);
  };

  return (
    <Container>
      <Logo>
        <img src={ logo } alt="imagem da logo do header" />
        <Input value={ searchNews } handleChange={ handleChange } />
      </Logo>
    </Container>
  );
}
