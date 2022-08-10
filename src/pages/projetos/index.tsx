import Header from '../../components/Header';
import { ProjetosContainer } from '../../styles/ProjetosStyles';
import adminceu from '../../assets/AdminCEU.png';
import admingym from '../../assets/AdminGYM.png';
import happysystem from '../../assets/happy.png';
import ProjetoCard from '../../components/ProjetoCard';

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

export default function Projetos({projetos}: ProjetoProps){
    return(
        <ProjetosContainer>
            <Header />
            <main className="container">






                <ProjetoCard
                title = "AdminCEU"
                type = "Website"
                slug = "adminceu"
                imgUrl={adminceu}

                />
                <ProjetoCard
                title = "AdminGYM"
                type = "Website"
                slug = "admingym"
                imgUrl={admingym}

                />
                <ProjetoCard
                title = "Happysystem"
                type = "Website"
                slug = "happysystem"
                imgUrl={happysystem}

                />

            </main>
        </ProjetosContainer>
    )
}
