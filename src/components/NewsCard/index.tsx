import { useState } from 'react';
import { calculateDays } from '../../utils/functions';
import Button from '../Button';
import { Container, Image, Text } from './style';
import emptyHeart from '../../assets/images/emptyHeart.svg';
import redHeart from '../../assets/images/redHeart.svg';

export default function NewsCard({ titulo, introducao, dataPublicacao, imagens }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  console.log(imagens);
  return (
    <Container>
      <Image>
        <img src={ `https://agenciadenoticias.ibge.gov.br/${JSON.parse(imagens).image_intro}` } alt="" />
      </Image>
      <Text>
        <h4>{titulo}</h4>
        <p>{introducao}</p>
        <section>
          <span>{`${calculateDays(dataPublicacao)} atrás`}</span>
          <Button>Leia a notícia aqui</Button>
        </section>
      </Text>
      <Button className="favorite-btn" handleClick={ handleClick }>
        <img src={ isFavorite ? redHeart : emptyHeart } alt="" />
      </Button>
    </Container>
  );
}
