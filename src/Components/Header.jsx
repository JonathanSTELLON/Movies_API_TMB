import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyRoutes, Selection } from './Router/Router';
import logo from '../img/video.png';
import { AppContext, MyContext } from './../store/AppContext';
import login from './../img/login.png';
import users from './../img/users.png';
import moon from './../img/half-moon.png';
import sun from './../img/sun.png';
import home from './../img/home.png';
import avatar from './../img/avatar.png';
import logout from './../img/logout.png';
import Logout from './Authentification/Logout';

const Header = (props) => {

  const { store, setStore } = useContext(MyContext);

  const changeTheme = () => {
    if(store.theme === "light"){
      setStore({...store, theme: "dark"});
    }
    else{
      setStore({...store, theme: "light"});
    }
  }

  return (
    <>
    <div className={store.theme === "light" ? "lightTheme" : "darkTheme"}>
      <header className="header">
        <img className="logoHeader" src={logo}></img>
        <div className="header-links">
        {
          store.isUserAuth ?
          <>
            <Link className="links" to={MyRoutes.HOME}><img src={home} className="icon"></img> Accueil</Link>
            <Link className="links" to={MyRoutes.PROFILE}><img src={avatar} className="icon"></img> Mon profil</Link>
            <Logout/>
            {store.theme === "light" ?
              <span className="switchTheme" onClick={changeTheme}><img src={moon} className="switch"></img></span>
              :
              <span className="switchTheme" onClick={changeTheme}><img src={sun} className="switch"></img></span>
            }
          </>
          :
          <>
            <Link className="links" to={MyRoutes.LOGIN}><img src={login} className="icon"></img> Se connecter</Link>
            <Link className="links" to={MyRoutes.REGISTER}><img src={users} className="icon"></img> S'inscrire</Link>
          </>
        }
        </div>
      </header>
    </div>
    </>
  )
}

export default Header;