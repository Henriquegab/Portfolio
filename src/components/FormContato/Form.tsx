import { useState } from 'react';
import { sendContactMail } from '../../services/sendMail';
import { FormContainer, Input, TextArea } from './styles';

export default function Form(){


    const [nome, setNome] = useState('');
    const [user_email, setUser_email] = useState('');
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');

    async function handleSubmit(event){
      event.preventDefault();

      try {
        await sendContactMail(nome, user_email, content, title);
        setNome('');
        setUser_email('');
        setContent('');
        setTitle('');

        console.log('deu certo!')

      } catch(error){
        console.log(error)
      }
    }


    return (
        <FormContainer onSubmit={handleSubmit}>

                <Input placeholder="Nome" value={nome} onChange={({target}) => setNome(target.value)} required/>
                <Input placeholder="E-mail" value={user_email} onChange={({target}) => setUser_email(target.value)} required type="email"/>
                <TextArea placeholder='Mensagem' value={content} onChange={({target}) => setContent(target.value)} required />
                    <button type='submit'>ENVIAR</button>

        </FormContainer>
    )
}
