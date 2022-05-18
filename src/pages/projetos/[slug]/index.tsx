import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';
import adminceu from '../../../assets/AdminCEU.png';

interface IProjeto {
    slug: string;
    title: string;
    type: string;
    description: string;
    link: string;
    thumbnail: string;
}

interface ProjetoProps {
    projetos: IProjeto[];
}

export default function Projeto({projetos}: ProjetoProps){
    return(
        <ProjetoContainer>
            <Header />
            <BannerProjeto 
                title = {projetos.projetos}
                type = {projetos.type}
                imgUrl={adminceu}
            />

            <main>
                <p>
                    {projetos.description}
                </p>
            
            <button type='button'>
                <a href={projetos.link}>Ver projeto online</a>
            </button>
            </main>

        </ProjetoContainer>
    )
}