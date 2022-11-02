import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import List from './List';
import Header from './Header';
import Home from './Home';
import Detail from './Detail';

export const MyRoutes = {
    HOME: '/',
    DETAIL: '/:idFilm',
    SELECTION: '/selection'
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
        </Routes>
    </BrowserRouter>
  )
}

export default Router