import { useState } from 'react';
import { sendContactMail } from '../../services/sendMail';
import { FormContainer, Input, TextArea } from './styles';

export default function Form(){


    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    async function handleSubmit(event){
      event.preventDefault();

      try {
        await sendContactMail(nome, email, mensagem);
        setNome('');
        setEmail('');
        setMensagem('');

      } catch(error){
        console.log(error)
      }
    }


    return (
        <FormContainer onSubmit={handleSubmit}>

                <Input placeholder="Nome" value={nome} onChange={({target}) => setNome(target.value)} required/>
                <Input placeholder="E-mail" value={email} onChange={({target}) => setEmail(target.value)} required type="email"/>
                <TextArea placeholder='Mensagem' value={mensagem} onChange={({target}) => setMensagem(target.value)} required />
                    <button type='submit'>ENVIAR</button>

        </FormContainer>
    )
}
