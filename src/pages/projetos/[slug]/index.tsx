import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';
import adminceu from '../../../assets/AdminCEU.png';
export default function Projeto(){
    return(
        <ProjetoContainer>
            <Header />
            <BannerProjeto 
                title="Admin CEU"
                type="Website"
                imgUrl={adminceu}
            />

            <main>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Molestias iusto at sapiente similique voluptatum omnis consequatur necessitatibus et nesciunt praesentium? 
                Ab blanditiis accusantium accusamus hic.</p>
            </main>
            <button type='button'>
                <a href="#">Ver projeto online</a>
            </button>

        </ProjetoContainer>
    )
}