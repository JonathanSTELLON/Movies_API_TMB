import React from 'react';
import { Link } from 'react-router-dom';
import { MyRoutes, Selection } from './Router';
import logo from '../img/video.png';

const Header = () => {
  return (
    <header className="header">
        <img className="logoHeader" src={logo}></img>
        <div className="header-links">
          <Link className="links" to={MyRoutes.HOME}>CINEMANIAC</Link>
        </div>
    </header>
  )
}

export default Header;