
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';
import Link from 'next/link';

import picture from '../../assets/AdminCEU.png';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetosProps {
  projetos: IProjeto[];
}


function Projetos({projetos}: ProjetosProps) {

  console.log(projetos);
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />
      <section>
        <ProjetoItem 

          img={picture}
          title="AdminCEU"
          type="Sistema Web"
          slug="adminceu"
        
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
