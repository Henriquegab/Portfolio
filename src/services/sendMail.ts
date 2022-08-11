import axios from "axios";

export const sendContactMail = async (name: string, email: string, content: string, title: string) => {
  const data = {
    name,
    email,
    content,
    title: 'Contato do Portifólio',
    user_email: 'henriquepro8@gmail.com'
  };

  try{
    return await axios.post("http://localhost:8000/api/apimail", data);

  } catch(error){
    return error;
  }
}
