import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../api/clientes';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    async function login(){
        const response = await postLogin("johndoe@phonestore.com","123456");
        if(response.token) {
            sessionStorage.setItem("token", response.token);
            navigate("/clientes");
        }
    }
    login();
  },[navigate]);

  return (
    <div>Fazendo Login...</div>
  )
}

export default Login