import { ReactNode } from 'react';

import { Container, TextContainer, InfosContainer, CodeItem } from './styles';

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
        <InfosContainer>
          <CodeItem>
            <span className='comment'>//Minha apresentação</span>
            <span className='purple'>Infos</span> {'\u007B'}
            <div>
              Nome: <span className='blue'>Henrique,</span>
            </div>
            <div>
              Sobrenome: <span className='blue'>Gabriel,</span>
            </div>
            <div>
              Cargo: <span className='blue'>Dev full-stack,</span>
            </div>
            <div>
              Cidade: <span className='blue'>Montes Claros</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            
            <span className='purple'>Tecnologias_utilizadas</span> {'\u007B'}
            <div>
              Front-end: <span className='blue'>React,</span>
            </div>
            <div>
              Back-end: <span className='blue'>Laravel</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
};

export default HomeHero;
