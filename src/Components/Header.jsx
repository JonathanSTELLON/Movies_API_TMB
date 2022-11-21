import React from 'react';
import { Link } from 'react-router-dom';
import { MyRoutes, Selection } from './Router';
import logo from '../img/video.png';
import Logout from './Logout';

const Header = () => {
  return (
    <>
      <header className="header">
        <img className="logoHeader" src={logo}></img>
        <div className="header-links">
          <Link className="links" to={MyRoutes.HOME}>Accueil</Link>
          <Link className="links" to={MyRoutes.LOGIN}>Se connecter</Link>
          <Link className="links" to={MyRoutes.REGISTER}>S'inscrire</Link>
          <Link className="links" to={MyRoutes.PROFILE}>Mon profil</Link>
        </div>
      </header>
    </>
    
  )
}

export default Header;