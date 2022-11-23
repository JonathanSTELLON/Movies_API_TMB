import React, { useContext } from 'react';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import Input from '../Input';
import { useNavigate } from "react-router-dom";
import { useError } from '../../utils/useError';
import { AppContext, MyContext } from '../../store/AppContext';
import eye from './../../img/eye.png';

const Login = () => {

  const URL = `https://api-ri7.herokuapp.com/api/users/login`;

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputType, setInputType] = useState("password");

  const { store, setStore } = useContext(MyContext);

  const { myError, saveError } = useError();

  const signin = () => {
    Axios
      .post(URL, {
        email: email,
        password: password
      })
      .then(response => {
        sessionStorage.setItem('token', response.data.token)
        setStore({...store, isUserAuth: true})
        if(response.statusText == 'OK'){
          navigate('/')
        }
      })
      .catch(error => saveError(error.response.data.error))
  }

  useEffect(() => {
    if(store.isUserAuth){
      navigate('/')
    }
  }, [store.isUserAuth])

  function handleSubmit(e){
    e.preventDefault();
    signin();
  }

  function changeInput(){
    if(inputType === "password"){
      setInputType("text");
    }
    else{
      setInputType("password");
    }
    
  }

  return (
    <>
    <div className={store.theme === "light" ? "lightTheme" : "darkTheme"}>
      <h1 className="error">{myError}</h1>
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
          type={inputType}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <img onClick={changeInput} src={eye} className="icon"></img>
        <button type="submit" className="button">Go !</button>
      </form>
      </div>
    </>
    
  )
}

export default Login;