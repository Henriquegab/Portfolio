import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';



function Experiencias() {
  return (
    <Container>
      <SectionTitle title="1 ano" description="de experiência" />

      <section>
        <ExperienciaItem 
          year="2020"
          title="Suporte Técnico - Estágio"
          description="
          Comecei meu primeiro estágio como suporte técnico na prefeitura de Montes Claros, 
          onde tive meu primeiro contato com o mercado de trabalho
          "
        />
        <ExperienciaItem 
          year="2021"
          title="Desenvolvedor Web - Estágio"
          description="
          Comecei minha carreira como desenvolvedor estagiando na Universidade estadual de Montes Claros.
          Desenvolvi sistemas utilizando Laravel e bootstrap, sendo o cargo que atualmente ocupo
          "
        />
        
      </section>
      
    </Container>
  );
};

export default Experiencias;
