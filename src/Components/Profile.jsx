import React from 'react';
import Axios from 'axios';
import { useEffect, useState } from 'react';

const Profile = () => {

    const [profile, setProfile] = useState([]);

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
    }, [])

  return (
    <div className="profile">
        <h3>{profile.firstname} {profile.lastname}</h3>
        <p>{profile.email}</p>
        <p>{profile.city}, {profile.postalCode}</p>
    </div>
  )
}

export default Profile;