import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';
import NewsCard from '../NewsCard';
import { Container } from './style';

export default function NewsCardList() {
  const { newsFilterData, currentFilter, quantityNews } = useContext(NewsContext);

  return (
    <Container>
      {newsFilterData.length > 0 ? newsFilterData.slice(0, quantityNews).map(({
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
      )) : (currentFilter === 'Favoritas' && <h1>Nenhuma notícia favoritada</h1>)}
    </Container>
  );
}
