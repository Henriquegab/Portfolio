import { useState } from 'react';
import { FormContainer, Input, TextArea } from './styles';

export default function Form(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          mobileNumber: mobileNumber,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

    return (
        <FormContainer>

                <Input onSubmit={handleSubmit} placeholder="Nome" name='name' required/>
                <Input placeholder="E-mail" name="user_email" required type="email"/>
                <TextArea placeholder='Mensagem' name='content' required />
                    <button type='submit'>ENVIAR</button>

        </FormContainer>
    )
}
