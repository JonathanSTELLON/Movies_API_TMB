import React from 'react';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import Input from './Input';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const URL = `https://api-ri7.herokuapp.com/api/users/login`;

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signin = () => {
    Axios
      .post(URL, {
        email: email,
        password: password
      })
      .then(response => {
        sessionStorage.setItem('token', response.data.token)
        if(response.statusText == 'OK'){
          navigate('/')
        }
      })
      .catch(error => console.log("err =>", error))
  }

  function handleSubmit(e){
    e.preventDefault();
    signin();
  }

  return (
    <>
      <h2>Connectez-vous !</h2>
      <form onSubmit={handleSubmit} className="form">
        <Input 
          label={"Email"}
          id={"email"}
          type={"text"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
          label={"Mot de passe"}
          id={"password"}
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="button">Go !</button>
      </form>
    </>
    
  )
}

export default Login;