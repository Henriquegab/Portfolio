import axios from "axios";

export const sendContactMail = async (name: string, user_email: string, content: string, title: string) => {
  const data = {
    name,
    email: 'henriquepro8@gmail.com',
    content,
    title: 'Contato do Portifólio',
    user_email
  };

  try{
    return await axios.post("http://localhost:8000/api/apimail", data);

  } catch(error){
    return error;
  }
}
