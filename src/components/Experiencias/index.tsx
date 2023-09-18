import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';



function Experiencias() {
  return (
    <Container>
      <SectionTitle title="Mais de 2 anos" description="de experiência" />

      <section>
        
        <ExperienciaItem
          year="2021"
          title="Desenvolvedor Web - Estágio"
          description="
          Comecei minha carreira como desenvolvedor estagiando na Universidade estadual de Montes Claros.
          Desenvolvi sistemas utilizando Laravel e bootstrap, sendo o cargo que atualmente ocupo
          "
        />
        <ExperienciaItem
          year="2023"
          title="Desenvolvedor BackEnd Laravel"
          description="
          Desenvolvi endpoints api para uma aplicação em flutter de rotas seguras. Fui responsável por criar soluções e fornecer dados necessários para o funcionamento do sistema
          "
        />

      </section>

    </Container>
  );
};

export default Experiencias;
