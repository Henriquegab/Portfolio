import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';
import happysystem from '../../../assets/happy.png';
export default function Projeto(){
    return(
        <ProjetoContainer>
            <Header />
            <BannerProjeto 
                title="Happy System"
                type="Website"
                imgUrl={happysystem}
            />

            <main>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Molestias iusto at sapiente similique voluptatum omnis consequatur necessitatibus et nesciunt praesentium? 
                Ab blanditiis accusantium accusamus hic.</p>
                <div>
                    <button type='button'>
                    <a href="#">Ver projeto online</a>
                    </button>
                </div>
            </main>
            

        </ProjetoContainer>
    )
}