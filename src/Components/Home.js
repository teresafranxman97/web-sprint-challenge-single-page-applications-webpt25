import React from 'react';
import styled from 'styled-components';

const Styles = styled.div `
    display: flex;
    align-items: center;

  .home-img {
    width: 100vw;
    height: 70%;
    position: absolute;
  }

  button {
    position: relative;
  }

`

function Home() {
  return (
    <Styles>
      <div className="home-container">
          <img 
            className="home-img"
            src="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="pizza img"  
          />
          <button>Order Now!</button>    
      </div>
    </Styles>  
  )
}

export default Home;


