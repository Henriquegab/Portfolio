import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';
import admingym from '../../../assets/AdminGYM.png';
export default function Projeto(){
    return(
        <ProjetoContainer>
            <Header />
            <BannerProjeto
                title="AdminGYM"
                type="Website"
                imgUrl={admingym}
            />

            <main>
                <p>Admin GYM é um sistema administrativo para a academia lotado na Unimontes, com o intuito de gerenciar o cadastro e pagamentos de alunos mensalmente cadastrados no sistema.

                O sistema foi desenvolvido com o Laravel 9, PHP 8 e bootstrapp e o template AdminLTE.
                </p>
                <div>
                    <button type='button'>
                    <a href="http://unimontesadmingym.herokuapp.com/">Ver projeto online</a>
                    </button>
                </div>
            </main>


        </ProjetoContainer>
    )
}
