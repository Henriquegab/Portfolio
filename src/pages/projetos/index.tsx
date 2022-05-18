import Header from '../../components/Header';
import { ProjetosContainer } from '../../styles/ProjetosStyles';
import adminceu from '../../assets/AdminCEU.png';
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
                title = "Happysystem"
                type = "Website"
                slug = "happysystem"
                imgUrl={adminceu}

                />
                
            </main>
        </ProjetosContainer>
    )
}