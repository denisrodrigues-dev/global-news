import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TfiTime } from 'react-icons/tfi';
import { calculateDays } from '../../utils/functions';
import Button from '../Button';
import { LinkNews, Container, Image, Text } from './style';
import emptyHeart from '../../assets/images/emptyHeart.svg';
import redHeart from '../../assets/images/redHeart.svg';
import NewsContext from '../../context/NewsContext';
import { NewsType } from '../../types';

type NewsCardProps = {
  id: number;
  titulo: string;
  introducao: string;
  dataPublicacao: string;
  imagens: string;
  link: string;
};

export default function NewsCard({
  id, titulo, introducao, dataPublicacao, imagens, link,
} : NewsCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const { favoriteNews } = useContext(NewsContext);

  useEffect(() => {
    const verifyLocalStorage = () => {
      if (localStorage.getItem('favoriteNews')) {
        const getStorage = JSON.parse(localStorage.getItem('favoriteNews') as string);
        setIsFavorite(getStorage.some((news: NewsType) => news.id === id));
      }
    };
    verifyLocalStorage();
  }, []);

  const handleClick = (newsId: number) => {
    setIsFavorite(!isFavorite);
    favoriteNews(!isFavorite, newsId);
  };

  return (
    <Container data-testid="news-card">
      <Image>
        <img src={ `https://agenciadenoticias.ibge.gov.br/${JSON.parse(imagens).image_intro}` } alt="" />
      </Image>
      <Text>
        <h4>{titulo}</h4>
        <p>{introducao}</p>
        <LinkNews>
          <section>
            <TfiTime />
            <span>{`${calculateDays(dataPublicacao)} atrás`}</span>
          </section>
          <Link to={ link } target="_blank">Leia a notícia aqui</Link>
        </LinkNews>
      </Text>
      <Button className="favorite-btn" handleClick={ () => handleClick(id) }>
        <img src={ isFavorite ? redHeart : emptyHeart } alt="favorite" />
      </Button>
    </Container>
  );
}
