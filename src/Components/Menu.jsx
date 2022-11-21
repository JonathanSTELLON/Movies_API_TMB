import React from 'react';
import { Link } from 'react-router-dom';
import { MyRoutes, Selection } from './Router';
import marvel from '../img/shield.png';
import pixar from '../img/lamp.png';
import blockbuster from '../img/clapperboard(1).png';
import heart from '../img/heart.png';
import oscar from '../img/oscar.png';

const Menu = () => {
  return (
    <div className="homeContainer">
        <section className="selection">
          <div className="logoTitle">
            <img className="logoHome" src={pixar}></img>
            <h2 className="titleCat">Pixar</h2>
          </div>
            <div className="homeLink">
              <Link className="linkHome" to={`${MyRoutes.SELECTION}/${Selection.PIXAR}`}>Show more !</Link>
            </div>
        </section>
        <section className="selection">
            <div className="logoTitle">
              <img className="logoHome" src={marvel}></img>
            <h2 className="titleCat">Marvel</h2>
            </div>
            <div className="homeLink">
              <Link className="linkHome" to={`${MyRoutes.SELECTION}/${Selection.MARVEL}`}>Show more !</Link>
            </div>
        </section>
        <section className="selection">
            <div className="logoTitle">
              <img className="logoHome" src={heart}></img>
            <h2 className="titleCat">Coup de coeur</h2>
            </div>
            <div className="homeLink">
              <Link className="linkHome" to={`${MyRoutes.SELECTION}/${Selection.COUPDECOEUR}`}>Show more !</Link>
            </div>
        </section>
        <section className="selection">
            <div className="logoTitle">
              <img className="logoHome" src={blockbuster}></img>
            <h2 className="titleCat">Classiques</h2>
            </div>
            <div className="homeLink">
              <Link className="linkHome" to={`${MyRoutes.SELECTION}/${Selection.CLASSIQUES}`}>Show more !</Link>
            </div>
        </section>
        <section className="selection">
            <div className="logoTitle">
              <img className="logoHome" src={oscar}></img>
            <h2 className="titleCat">Blockbusters</h2>
            </div>
            <div className="homeLink">
              <Link className="linkHome" to={`${MyRoutes.SELECTION}/${Selection.BLOCKBUSTERS}`}>Show more !</Link>
            </div>
        </section>
      </div>
  )
}

export default Menu;