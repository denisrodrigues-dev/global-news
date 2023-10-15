import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';
import NewsCard from '../../components/NewsCard';
import { Container, Title, CardList } from './style';
import Button from '../../components/Button';

export default function Search() {
  const {
    searchNewsData, searchInfo, addQuantityNews, quantityNews,
  } = useContext(NewsContext);

  return (
    <Container>
      <Title>
        <h1>
          { searchNewsData.length > 0
            ? (`Resultados para "${searchInfo}":`)
            : `Nenhum resultado encontrado para "${searchInfo}"`}
        </h1>
      </Title>
      <CardList>
        {searchNewsData && searchNewsData.slice(0, quantityNews).map(({
          id, imagens, titulo, introducao, data_publicacao: dataPublicacao, link,
        }) => (
          <NewsCard
            key={ id }
            id={ id }
            imagens={ imagens }
            titulo={ titulo }
            introducao={ introducao }
            dataPublicacao={ dataPublicacao }
            link={ link }
          />
        ))}
      </CardList>
      {searchNewsData.length > 9
      && (
        <Button
          className="more-btn"
          handleClick={ addQuantityNews }
        >
          MAIS NOTÍCIAS
        </Button>)}
    </Container>
  );
}
