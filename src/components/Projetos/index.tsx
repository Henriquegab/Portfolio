
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';
import Link from 'next/link';

import adminceu from '../../assets/AdminCEU.png';
import happysystem from '../../assets/happy.png';



function Projetos() {

  
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />
      <section>
        <ProjetoItem 

          img={adminceu}
          title="AdminCEU"
          type="Sistema Web"
          slug="adminceu"
        
        />      
        <ProjetoItem 

          img={happysystem}
          title="Happy System"
          type="Sistema Web"
          slug="happysystem"
        
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
