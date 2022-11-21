import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import List from './List';
import Header from './Header';
import Home from './Home';
import Detail from './Detail';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';

export const MyRoutes = {
    HOME: '/',
    DETAIL: '/:idFilm',
    SELECTION: '/selection',
    LOGIN: '/login',
    REGISTER: '/register',
    PROFILE: '/profile'
}

export const Selection = {
  MARVEL: 5,
  PIXAR: 198,
  COUPDECOEUR: 7,
  CLASSIQUES: 483,
  BLOCKBUSTERS: 6
}

const Router = () => {
  
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path={MyRoutes.HOME} element={<Home />}/>
            <Route path={MyRoutes.DETAIL} element={<Detail />}/>
            <Route path={`${MyRoutes.SELECTION}/:id`} element={<List />}/>
            <Route path={MyRoutes.LOGIN} element={<Login />}/>
            <Route path={MyRoutes.REGISTER} element={<Register />}/>
            <Route path={MyRoutes.PROFILE} element={<Profile />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router