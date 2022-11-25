import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { AppContext, MyContext } from '../../store/AppContext';
import logmeout from './../../img/logout.png';

const Logout = () => {

    const { store, setStore } = useContext(MyContext);

    const logout = () => {
      sessionStorage.clear();
      setStore({...store, isUserAuth: false, theme: "light"});
    }

  return (
    <>
        <Link className="links" onClick={logout}><img src={logmeout} className="icon"></img> <div className="textMenu"> Se deconnecter</div></Link>
    </>
  )
}

export default Logout;