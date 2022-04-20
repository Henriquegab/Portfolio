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
                {projetos.map(projeto => (

                    <ProjetoCard 
                    
                    key = {projeto.slug}
                    title = {projeto.title}
                    type = {projeto.type}
                    slug = {projeto.slug}
                    imgUrl={projeto.thumbnail}

                    />

                ))}
                
                <ProjetoCard 
                title = "Projeto 01"
                type = "Website"
                slug = "testf"
                imgUrl="https://avatars.githubusercontent.com/u/67250181?s=400&u=4750b82eaf738a93546dc67a2b5dfa67ea009a67&v=4"

                />
                <ProjetoCard 
                title = "Projeto 01"
                type = "Website"
                slug = "test2"
                imgUrl="https://avatars.githubusercontent.com/u/67250181?s=400&u=4750b82eaf738a93546dc67a2b5dfa67ea009a67&v=4"

                />
                <ProjetoCard 
                title = "Projeto 01"
                type = "Website"
                slug = "test4"
                imgUrl="https://avatars.githubusercontent.com/u/67250181?s=400&u=4750b82eaf738a93546dc67a2b5dfa67ea009a67&v=4"

                />
            </main>
        </ProjetosContainer>
    )
}