import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TfiTime } from 'react-icons/tfi';
import NewsContext from '../../context/NewsContext';
import { LinkNews, FeaturedCard, Image, Text } from './style';
import { calculateDays } from '../../utils/functions';
import Button from '../Button';
import emptyHeart from '../../assets/images/emptyHeart.svg';
import redHeart from '../../assets/images/redHeart.svg';
import { NewsType } from '../../types';

export default function FeaturedNewsCard() {
  const { featuredNewsData } = useContext(NewsContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const { favoriteNews } = useContext(NewsContext);

  const handleClick = (newsId: number) => {
    setIsFavorite(!isFavorite);
    favoriteNews(!isFavorite, newsId);
  };

  useEffect(() => {
    const verifyLocalStorage = () => {
      if (localStorage.getItem('favoriteNews')) {
        const getStorage = JSON.parse(localStorage.getItem('favoriteNews') as string);
        setIsFavorite(getStorage
          .some((news: NewsType) => news.id === featuredNewsData?.id));
      }
    };
    verifyLocalStorage();
  }, [featuredNewsData]);

  return (
    featuredNewsData && (
      <FeaturedCard data-testid="featured-card">
        <Image>
          <img src={ `https://agenciadenoticias.ibge.gov.br/${JSON.parse(featuredNewsData.imagens).image_intro}` } alt="" />
        </Image>
        <Text>
          <section className="introFeatured">
            <p>Notícia mais recente</p>
            <Button handleClick={ () => handleClick(featuredNewsData.id) }>
              <img src={ isFavorite ? redHeart : emptyHeart } alt="favorite" />
            </Button>
          </section>
          <h2>{featuredNewsData.titulo}</h2>
          <p>{featuredNewsData.introducao}</p>
          <LinkNews>
            <section>
              <TfiTime />
              <span>{`${calculateDays(featuredNewsData.data_publicacao)} atrás`}</span>
            </section>
            <Link to={ featuredNewsData.link } target="_blank">Leia a notícia aqui</Link>
          </LinkNews>
        </Text>
      </FeaturedCard>
    )
  );
}
