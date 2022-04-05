
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';
import Link from 'next/link';



function Projetos() {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />
      <section>
        <ProjetoItem 

          img=""
          title="Projeto 1"
          type="Website"
          slug="teste"
        
        />
        <ProjetoItem 

          img=""
          title="Projeto 1"
          type="Website"
          slug="teste"
        
        />
        <ProjetoItem 

          img=""
          title="Projeto 1"
          type="Website"
          slug="teste"
        
        />
       
      </section>
      <button type="button">
        <Link href="/projetos">

            <a>Ver todos os Projetos</a>

        </Link>
      </button>
    </Container>
  );
};

export default Projetos;
