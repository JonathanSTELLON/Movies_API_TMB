import React, { useContext } from 'react';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import Input from './Input';
import { AppContext, MyContext } from './../store/AppContext';

const Profile = () => {

    const [profile, setProfile] = useState({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        biography: "",
        postalCode: "",
        city: "",
        birthdate: "",
        avatar: ""
    });

    const { store, setStore } = useContext(MyContext);

    const [showProfile, setShowProfile] = useState(true);

    const URL = 'https://api-ri7.herokuapp.com/api/users/profile';

    const getProfile = () => {
        Axios
            .get(URL,
            {
                headers:{
                    Authorization : `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            .then(response => setProfile(response.data))
            .catch(error => console.log("err =>", error))
    }

    useEffect(() => {
        getProfile();
    }, []);

    const displayForm = () => {
        setShowProfile(!showProfile);
    }

    const updateProfile =  () => {
        Axios
            .put(URL, {
                firstname: profile.firstname,
                lastname: profile.lastname,
                email: profile.email,
                password: profile.password,
                city: profile.city,
                postalCode: profile.postalCode,
                birthdate: profile.birthdate,
                avatar: profile.avatar
            },
            {
                headers:{
                    Authorization : `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            .then(response => {
                setProfile(response.data);
            })
            .catch(error => {
                console.log(error);
            })
        setShowProfile(!showProfile);
    }

  return (
    <div className={store.theme === "light" ? "lightTheme" : "darkTheme"}>
    <div className="profile">
    {showProfile ?
        <>
            {profile.email.length > 0 ?
            <>
                <img src={profile.avatar} className="profilePic"></img>
                <h3>{profile.firstname} {profile.lastname}</h3>
                <p>{profile.email}</p>
                <p>{profile.city} {profile.postalCode}</p>
                <p>{profile.birthdate}</p>
            </>
            :
            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            }
        </>
        :
        <>
            <form>
                <Input 
                    label={"Prénom"}
                    id={"firstName"}
                    type={"text"}
                    value={profile.firstname}
                    onChange={(e) => setProfile({...profile, firstname: e.target.value})}
                />
                <Input 
                    label={"Nom"}
                    id={"lastName"}
                    type={"text"}
                    value={profile.lastname}
                    onChange={(e) => setProfile({...profile, lastname: e.target.value})}
                />
                <Input 
                    label={"Ville"}
                    id={"city"}
                    type={"text"}
                    value={profile.city}
                    onChange={(e) => setProfile({...profile, city: e.target.value})}
                />
                <Input 
                    label={"Code postal"}
                    id={"postalCode"}
                    type={"text"}
                    value={profile.postalCode}
                    onChange={(e) => setProfile({...profile, postalCode: e.target.value})}
                />
                <Input 
                    label={"Date de naissance"}
                    id={"birthdate"}
                    type={"date"}
                    value={profile.birthdate}
                    onChange={(e) => setProfile({...profile, birthdate: e.target.value})}
                />
            </form>
        </>
    }
    <button 
        className="button" 
        onClick={showProfile ? displayForm : updateProfile}
    >
            {showProfile ? 'Editer mon profil' : 'Soumettre'}
        </button>
    </div>
    </div>
  )
}

export default Profile;