import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home';
import Register from './pages/register';

import UserHome from './pages/userhome';
import Report from './pages/report';

function Routes () {
  return (
    <BrowserRouter>
      <Route path='/' component = { Home } exact />
      <Route path='/register' component = { Register } />
      <Route path='/report' component={ Report } />
      <Route path='/usertickets' component = { UserHome } />
    </BrowserRouter>
  )
}

export default Routes;