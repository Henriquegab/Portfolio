import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';



function FormContato() {
  return (
    <Container>
      <SectionTitle title={
        <>
            Precisa dos

            <br>
            </br>

            meus serviços?
        
        </>
      } 
      description={

        <>
        Preencha o formulário abaixo que

        <br>
        </br>

        retornarei em breve!
    
    </>

      }/>

      <Form />
      
    </Container>
  );
};

export default FormContato;
