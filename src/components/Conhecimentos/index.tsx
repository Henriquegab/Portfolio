
import { AiFillHtml5 } from 'react-icons/ai';
import { SiTypescript } from 'react-icons/si';
import { FaCss3Alt, FaReact, FaLaravel } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';



function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt />} />
        <ConhecimentoItem title="Javascript" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="Typescript" icon={<SiTypescript />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem title="Laravel" icon={<FaLaravel />} />
      </section>
    </Container>
  );
};

export default Conhecimentos;
