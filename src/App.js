import React, { useEffect, useState } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import Home from './Components/Home';
import PizzaForm from './Components/Pizza'
import Schema from './Validation/formSchema';
import logo from './Images/logo.png'
import * as Yup from 'yup';

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

const initialFormValues = {
  //// DROPDOWN ////
  size: '',
  // RADIO BUTTONS //
  sauce: '',
  // CHECKBOXES //
  pepperoni: false,
  bacon: false,
  spicySausage: false,
  bananaPeppers: false,
  onions: false,
  greenPeppers: false,
  dicedTomatoes: false,
  olives: false,
  roastedChicken: false,
  pineapple: false,
  cheese: false,
  // TEXT BOXES //
  instructions: '',
  name: '',
}
const initialFormErrors = {
  name: '',
}
const initialDisabled = true
const initialPostData = []

function App() {
  // STATES //
  const [ form, setForm ] = useState(initialFormValues);
  const [ errors, setErrors ] = useState(initialFormErrors)
  const [ disabled, setDisabled ] = useState(initialDisabled) //BOOLEAN for button
  const [ postData, setPostData ] = useState(initialPostData)

  ////// POST REQUEST HERE ///////
  const getPostData = newData => {
    axios.post("https://reqres.in", newData)
      .then(res => {
        console.log(res.data)
        setPostData([...postData, res.data])
        setForm(initialFormValues)
      })
  }

 /////// EVENT HANDLERS  
  const inputChange = (name, value) => {
    Yup.reach(Schema, name)
      .validate(value)
        .then(() => setErrors({...errors, [name]: ''}))
        .catch(err => setErrors({...errors, [name]: err.errors[0]}))

    setForm({
      ...form,[name]: value
    })   
  };

  const formSubmit = () => {
    const newData = {
      size: form.size.trim(),
      sauce: form.sauce.trim(),
      instructions: form.instructions.trim(),
      name: form.name.trim(),
      toppings: [
        "pepperoni",
        "bacon",
        "spicySausage",
        "bananaPeppers",
        "onions",
        "greenPeppers",
        "dicedTomatoes",
        "olives",
        "roastedChicken",
        "pineapple",
        "cheese"
      ].filter(topping => !!form[topping])
    }
    getPostData(newData)
  }
  
 //  SIDE EFFECTS //
  useEffect(() => {
    Schema.isValid(form)
      .then(isValid => setDisabled(!isValid))
      .catch(err => console.log(err))
  }, [form]);

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
            <PizzaForm 
            values={form} 
            change={inputChange} 
            submit={formSubmit} 
            disabled={disabled} 
            />
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
