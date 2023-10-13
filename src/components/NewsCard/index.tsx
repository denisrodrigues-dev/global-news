import { calculateDays } from '../../utils/functions';
import Button from '../Button';
import { Container, Image, Text } from './style';

export default function NewsCard({ titulo, introducao, dataPublicacao, imagens }) {
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
    </Container>
  );
}
