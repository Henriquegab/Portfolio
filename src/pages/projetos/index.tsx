import Header from '../../components/Header';
import { ProjetosContainer } from '../../styles/ProjetosStyles';
import adminceu from '../../assets/AdminCEU.png';
import ProjetoCard from '../../components/ProjetoCard';

export default function Projetos(){
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
                {/* <ProjetoCard 
                title = "Projeto 01"
                type = "Website"
                slug = "testf"
                imgUrl="https://avatars.githubusercontent.com/u/67250181?s=400&u=4750b82eaf738a93546dc67a2b5dfa67ea009a67&v=4"

                />
                <ProjetoCard 
                title = "Projeto 01"
                type = "Website"
                slug = "testf"
                imgUrl="https://avatars.githubusercontent.com/u/67250181?s=400&u=4750b82eaf738a93546dc67a2b5dfa67ea009a67&v=4"

                /> */}
            </main>
        </ProjetosContainer>
    )
}