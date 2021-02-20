import React from 'react';
import styled from 'styled-components';

const Styles = styled.div `
    .home-img {
        width: 100%;
        height: 80%;
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
              src="https://images.pexels.com/photos/2918521/pexels-photo-2918521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="pizza img"  
            />
            <button>Order Now!</button>    
        </div>
      </Styles>  
    )
}

export default Home;


