import React from "react";

import { Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Home from './Components/Home';
import Pizza from './Components/Pizza'

import logo from './Images/logo.png'

const Styled = styled.div `
  nav {
    display: flex;
    flex-flow: row-nowrap;
    justify-content: space-between;
    border-bottom: 2px solid lightgrey;
  }

   .nav-links {
    font-size: 20px;
    font-weight: bold;
    margin-right: 1em;
    margin-top: 2%;
  }

  .link {
    color: black;
    text-decoration: none;
  }

  .secondLink {
    color: black;
    border: 1px solid red;
    border-radius: 10px 20px 10px;
    background-color: red;
    padding: 5px;
    margin-left: .5em;
    text-decoration: none;
  }

  img {
    width: 10rem;
    height: 7.5rem;
  }
`

function App() {

  return (
    <Styled>  
      <div className="App">
        <nav>
         <img src={logo} alt='logo' /> 
          <div className="nav-links">
            <Link className='link' to='/'>Home</Link>
            <Link className='secondLink' to='/pizza'>Pizza</Link>
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
