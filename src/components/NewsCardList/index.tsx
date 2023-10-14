import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';
import NewsCard from '../NewsCard';
import { Container } from './style';

export default function NewsCardList() {
  const { newsFilterData, quantityNews } = useContext(NewsContext);

  return (
    <Container>
      {newsFilterData && newsFilterData.slice(0, quantityNews).map(({
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
    </Container>
  );
}
