import BannerProjeto from '../../../components/BannerProjeto';
import { AiFillHtml5 } from 'react-icons/ai';
import Header from '../../../components/Header';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';
import adminceu from '../../../assets/AdminCEU.png';
import ConhecimentoItem from '../../../components/Conhecimentos/ConhecimentoItem';
import SectionTitle from '../../../components/SectionTitle';
import { Container } from '../../../components/Experiencias/styles';
import { FaCss3Alt, FaLaravel } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
export default function Projeto(){
    return(
        <ProjetoContainer>
            <Header />
            <BannerProjeto 
                title="AdminCEU"
                type="Website"
                imgUrl={adminceu}
            />

            <main>
                <p>Admin CEU é um sistema administrativo para centros esportivos com o intuito de gerenciar o cadastro e pagamentos de alunos mensalmente cadastrados no sistema.

                O sistema foi desenvolvido com o Laravel 9, PHP 8 e bootstrapp.
                </p>

                <Container>
                <SectionTitle title="Tecnologias usadas" />
                <section>
                    <ConhecimentoItem  title="HTML" icon={<AiFillHtml5 />}/>
                    <ConhecimentoItem title="CSS" icon={<FaCss3Alt />} />
                    <ConhecimentoItem title="Javascript" icon={<IoLogoJavascript />} />
                    <ConhecimentoItem title="Laravel 9" icon={<FaLaravel />} />
                </section>
            </Container>

                <div>
                    <button type='button'>
                    <a href="https://adminceu.herokuapp.com/">Ver projeto online</a>
                    </button>
                </div>
            
            

            </main>

        </ProjetoContainer>
    )
}