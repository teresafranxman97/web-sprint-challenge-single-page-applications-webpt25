import React from 'react';

function Pizza() {

  return (
    <form className="form-container">
      <h1>Build Your Own Pizza</h1>
        <label>
          <h2>Choice of Size</h2>
          <p>Required</p>
          <select name="size">
            <option>Select</option>
            <option>Small</option> 
            <option>Medium</option> 
            <option>Large</option>    
          </select> 
        </label>

      <div className="form-group inputs">
        <h2> Choice of Sauce</h2> 
        <p>Required</p>

        <label>Original Red
          <input
            type="radio"
            name="sauce"
          />
        </label>  

        <label>Garlic Ranch
            <input
              type="radio"
              name="sauce"  
            />
        </label>

        <label>BBQ Sauce
            <input
              type="radio"
              name="sauce"  
            />
        </label>

        <label>Spinach Alfredo 
            <input
              type="radio"
              name="sauce"  
            />
        </label>
      </div>  

      <div className="form-group-checkboxes">
        <h2>Add Toppings</h2>
        <p>Choose up to 10.</p>

        <label>Pepperoni
            <input
                type="checkbox"
                name="pepperoni"
            />
        </label>

        <label>Sausage
            <input
                type="checkbox"
                name="sausage"  
            />
        </label>

        <label>Canadian Bacon
            <input
                type="checkbox"
                name="bacon"
            />
        </label>

        <label>Spicy Italian Sausage
            <input
                type="checkbox"
                name="spicySausage"
            />
        </label>

        <label>Banana Peppers
            <input
                type="checkbox"
                name="bananaPeppers"
            />
        </label>

        <label>Onions
            <input
                type="checkbox"
                name="onions"
            />
        </label>

        <label>Green Peppers
            <input
                type="checkbox"
                name="greenPeppers"
            />
        </label>

        <label>Diced Tomatoes
            <input
                type="checkbox"
                name="dicedTomatoes"
            />
        </label>

        <label>Black Olives
            <input
                type="checkbox"
                name="olives"
            />
        </label>

        <label>Roasted Chicken
            <input
                type="checkbox"
                name="roastedChicken"
            />
        </label>

        <label>Pineapple
            <input
                type="checkbox"
                name="pineapple"
            />
        </label>

        <label>Extra Cheese
            <input
                type="checkbox"
                name="cheese"
            />
        </label>
      </div>
    </form>
 )

}

export default Pizza;