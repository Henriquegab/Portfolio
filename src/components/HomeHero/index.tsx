import { ReactNode } from 'react';

import { Container, TextContainer } from './styles';

import picture from '../../assets/henrique.png';

interface HomeHeroProps {
  children: ReactNode;
}

function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="henrique" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Henrique</h2>
        </TextContainer>
      </div>
    </Container>
  );
};

export default HomeHero;
