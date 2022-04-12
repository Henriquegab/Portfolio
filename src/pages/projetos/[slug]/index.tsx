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
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat maxime molestias itaque vel nisi nulla non obcaecati amet placeat doloribus adipisci libero quo, sapiente suscipit quae!
                Saepe velit natus cumque id corporis cupiditate sit animi fuga officiis suscipit sequi fugit, possimus excepturi obcaecati reiciendis ut molestiae atque dolore quibusdam vel? Magni molestiae sit minus. 
                    Repudiandae odit eius obcaecati sint veritatis qui quisquam maiores expedita facere aliquid natus ratione error culpa, incidunt doloremque corrupti at adipisci voluptas asperiores, dolores ullam itaque!</p>
            
            <button type='button'>
                <a href="http://adminceu.herokuapp.com/">Ver projeto online</a>
            </button>
            </main>

        </ProjetoContainer>
    )
}