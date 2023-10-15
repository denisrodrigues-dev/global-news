import { useContext, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Input from '../Input';
import { Container, Logo, Search } from './style';
import Button from '../Button';
import NewsContext from '../../context/NewsContext';

export default function Header() {
  const [searchNews, setSearchNews] = useState('');

  const { searchNewsByValue } = useContext(NewsContext);

  const navigate = useNavigate();

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchNews(value);
  };

  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src={ logo } alt="imagem da logo do header" />
        </Link>
        <Search>
          <Input
            data-testid="search-input"
            value={ searchNews }
            placeholder="Buscar notícias e releases"
            handleChange={ handleChange }
          />
          <Button
            handleClick={ () => {
              searchNewsByValue(searchNews);
              setSearchNews('');
              navigate('/search');
            } }
          >
            <BsSearch />
          </Button>
        </Search>
      </Logo>
    </Container>
  );
}
