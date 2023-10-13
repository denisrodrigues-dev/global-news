import { useContext, useState } from 'react';
import NewsContext from '../../context/NewsContext';
import { FeaturedCard, Image, Text } from './style';
import { calculateDays } from '../../utils/functions';
import Button from '../Button';
import emptyHeart from '../../assets/images/emptyHeart.svg';
import redHeart from '../../assets/images/redHeart.svg';

export default function FeaturedNewsCard() {
  const { featuredNewsData } = useContext(NewsContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    featuredNewsData && (
      <FeaturedCard>
        <Image>
          <img src={ `https://agenciadenoticias.ibge.gov.br/${JSON.parse(featuredNewsData.imagens).image_intro}` } alt="" />
        </Image>
        <Text>
          <section className="introFeatured">
            <p>Notícia mais recente</p>
            <Button handleClick={ handleClick }>
              <img src={ isFavorite ? redHeart : emptyHeart } alt="" />
            </Button>
          </section>
          <h2>{featuredNewsData.titulo}</h2>
          <p>{featuredNewsData.introducao}</p>
          <span>{`${calculateDays(featuredNewsData.data_publicacao)} atrás`}</span>
        </Text>
      </FeaturedCard>
    )
  );
}
