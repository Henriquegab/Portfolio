import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';
import adminceu from '../../../assets/AdminCEU.png';
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
                <div>
                    <button type='button'>
                    <a href="https://adminceu.herokuapp.com/">Ver projeto online</a>
                    </button>
                </div>
            </main>
            

        </ProjetoContainer>
    )
}