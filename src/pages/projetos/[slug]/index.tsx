import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';
import adminceu from '../../../assets/AdminCEU.png';



export default function Projeto(){
    return(
        <ProjetoContainer>
            <Header />
            <BannerProjeto 
                title = "perdeu tudo"
                type = "oi"
                imgUrl={adminceu}
            />

            <main>
                <p>
                    oi
                </p>
            
            <button type='button'>
                <a href="">Ver projeto online</a>
            </button>
            </main>

        </ProjetoContainer>
    )
}