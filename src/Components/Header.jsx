import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyRoutes, Selection } from './Router/Router';
import logo from '../img/video.png';
import { AppContext, MyContext } from './../store/AppContext';
import login from './../img/login.png';
import users from './../img/users.png';
import moon from './../img/half-moon.png';
import sun from './../img/sun.png';
import night from './../img/night.png';
import day from './../img/day.png';
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
    <div className="headContainer">
    <div className={store.theme === "light" ? "lightTheme" : "darkTheme"}>
      <header className="header">
        <img className="logoHeader" src={logo}></img>
        <div className="header-links">
        {
          store.isUserAuth ?
          <>
            <Link className="links" to={MyRoutes.HOME}><img src={home} className="icon"></img> <div className="textMenu">Accueil</div></Link>
            <Link className="links" to={MyRoutes.PROFILE}><img src={avatar} className="icon"></img> <div className="textMenu">Mon profil</div></Link>
            <Logout/>
            {store.theme === "light" ?
              <div className="switchTheme" onClick={changeTheme}><img src={night} className="switch"></img></div>
              :
              <div className="switchTheme" onClick={changeTheme}><img src={day} className="switch"></img></div>
            }
          </>
          :
          <>
            <Link className="links" to={MyRoutes.LOGIN}><img src={login} className="icon"></img> <div className="textMenu">Se connecter</div></Link>
            <Link className="links" to={MyRoutes.REGISTER}><img src={users} className="icon"></img> <div className="textMenu"> S'inscrire</div></Link>
          </>
        }
        </div>
      </header>
    </div>
    </div>
  )
}

export default Header;