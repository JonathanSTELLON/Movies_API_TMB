import React from 'react';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import Input from '../Input';
import { useNavigate } from "react-router-dom";

const Register = () => {

    const URL = `https://api-ri7.herokuapp.com/api/users/register`;

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [avatar, setAvatar] = useState('');

    const register = () => {
        Axios
            .post(URL, {
                firstname: firstName,
                lastname: lastName,
                email: email,
                password: password,
                city: city,
                postalCode: postalCode,
                birthdate: birthdate,
                avatar: avatar
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
            navigate('/login')
    }

    function handleSubmit(e){
        e.preventDefault();
        register();
    }

  return (
    <div className="loginContainer">
       <h2>Inscrivez-vous !</h2>
        <form onSubmit={handleSubmit} className="form">
            <Input 
                label={"Prénom"}
                id={"firstName"}
                type={"text"}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <Input 
                label={"Nom"}
                id={"lastName"}
                type={"text"}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
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
            <Input 
                label={"Ville"}
                id={"city"}
                type={"text"}
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <Input 
                label={"Code postal"}
                id={"postalCode"}
                type={"text"}
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
            />
            <Input 
                label={"Date de naissance"}
                id={"birthdate"}
                type={"date"}
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
            />
            <Input 
                label={"Avatar"}
                id={"avatar"}
                type={"text"}
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
            />
            <button type="submit" className="button">Go !</button>
        </form> 
    </div>
    
  )
}

export default Register;