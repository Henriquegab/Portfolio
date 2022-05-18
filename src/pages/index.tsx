import { HomeContainer } from '../styles/HomeStyles';
import Header from "../components/Header";
import HomeHero from '../components/HomeHero';
import Experiencias from '../components/Experiencias';
import Projetos from '../components/Projetos';
import Conhecimentos from '../components/Conhecimentos';
import FormContato from '../components/FormContato';
import Footer from '../components/Footer';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps {
  projetos: IProjeto[];
}

export default function Home({projetos}: HomeProps) {
  return (
    
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Experiencias />
        <Projetos projetos={projetos}/>
        <Conhecimentos />
        <FormContato />
      </main>

      <Footer />
      
    </HomeContainer>
  );
}
