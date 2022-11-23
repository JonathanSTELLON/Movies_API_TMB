import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Outlet, Navigate} from 'react-router-dom';
import List from '../List';
import Header from '../Header';
import Home from '../Home';
import Detail from '../Detail';
import Register from '../Authentification/Register';
import Login from '../Authentification/Login';
import Profile from '../Profile';
import { AppContext, MyContext } from '../../store/AppContext';
import { useContext } from 'react';

export const MyRoutes = {
    HOME: '/',
    DETAIL: '/:idFilm',
    SELECTION: '/selection',
    LOGIN: '/login',
    REGISTER: '/register',
    PROFILE: '/profile',
    LOGOUT: '/logout'
}

const AuthRoutes = () => {

  const { store } = useContext(MyContext);

  const navigate = useNavigate();

  return (
    store.isUserAuth ? 
      <Outlet />
    : 
      <Navigate to={MyRoutes.LOGIN}/>
  );

};

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
    <AppContext>
        <Header />
        <Routes>
          {/* ROUTES PRIVEES */}
          <Route element={<AuthRoutes />}>
            <Route path={MyRoutes.PROFILE} element={<Profile />}/>
            <Route path={MyRoutes.HOME} element={<Home />}/>
            <Route path={MyRoutes.DETAIL} element={<Detail />}/>
            <Route path={`${MyRoutes.SELECTION}/:id`} element={<List />}/>
            <Route path={MyRoutes.LOGOUT} element={<Login />}/>
          </Route>
          {/* ROUTES PUBLIQUES */}
          <Route path={MyRoutes.LOGIN} element={<Login />}/>
          <Route path={MyRoutes.REGISTER} element={<Register />}/>
        </Routes>
        </AppContext>
    </BrowserRouter>
  )
}

export default Router