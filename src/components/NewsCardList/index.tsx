import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';
import NewsCard from '../NewsCard';
import { Container } from './style';
import Button from '../Button';

export default function NewsCardList() {
  const { newsData } = useContext(NewsContext);

  return (
    <Container>
      {newsData && newsData.slice(0, 9).map(({ id, imagens, titulo, introducao, data_publicacao: dataPublicacao }) => (
        <NewsCard
          key={ id }
          imagens={ imagens }
          titulo={ titulo }
          introducao={ introducao }
          dataPublicacao={ dataPublicacao }
        />
      ))}
      <Button>MAIS NOTÍCIAS</Button>
    </Container>
  );
}
