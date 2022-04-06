import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiFillLinkedin,

} from 'react-icons/ai';

import { Container } from './styles';



function Footer() {

  function handleRedirect(url: string){
    window.open(url);
  }

  function handleScrollTop(){
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Container>
      <div className="container">
        <button onClick={handleScrollTop} type='button'>
          Voltar ao topo
        </button>
        <section>
          <AiOutlineInstagram onClick={() => handleRedirect("https://www.instagram.com/henrique.gab1609/")} />
        
          <AiOutlineGithub onClick={() => handleRedirect("https://github.com/Henriquegab")} />
        
          <AiFillLinkedin onClick={() => handleRedirect("https://www.linkedin.com/in/henrique-gabriel-siqueira-da-cruz-0826a4146/")} />
        </section>
      </div>
      
    </Container>
  );
};

export default Footer;
