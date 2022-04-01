
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';



function Projetos() {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />
      <section>
        <ProjetoItem />
        <ProjetoItem />
        <ProjetoItem />
      </section>
    </Container>
  );
};

export default Projetos;
