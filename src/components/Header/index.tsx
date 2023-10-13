import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import logo from '../../assets/images/logo.png';
import Input from '../Input';
import { Container, Logo, Search } from './style';
import Button from '../Button';

export default function Header() {
  const [searchNews, setSearchNews] = useState('');

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchNews(value);
  };

  return (
    <Container>
      <Logo>
        <img src={ logo } alt="imagem da logo do header" />
        <Search>
          <Input
            value={ searchNews }
            placeholder="Buscar notícias e releases"
            handleChange={ handleChange }
          />
          <Button><BsSearch /></Button>
        </Search>
      </Logo>
    </Container>
  );
}
