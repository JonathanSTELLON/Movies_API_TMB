import React, { useContext }  from 'react';
import Register from './Authentification/Register';
import Menu from './Menu';
import { AppContext, MyContext } from './../store/AppContext';

const Home = () => {

  const { store, setStore } = useContext(MyContext);

  return (
      
    <div className={store.theme === "light" ? "lightTheme" : "darkTheme"}>
      <Menu/>
    </div>
  )
}

export default Home;