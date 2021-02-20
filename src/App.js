import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Home from './Components/Home';
import Pizza from './Components/Pizza'

import logo from './Images/logo.png'

const Styled = styled.div `
  img {
    
    width: 10rem;
    height: 8rem;
  }
`

function App() {

  return (
    <Styled>  
      <div className="App">
        <nav>
         <img src={logo} alt='logo' /> 
          <div className="nav-links">
            <Link to='/'>Home</Link>
            <Link to='/pizza'>Pizza</Link>
          </div>  
        </nav>
        <Switch>
          <Route path='/pizza'>
            <Pizza />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Styled> 
  );
};

export default App;
