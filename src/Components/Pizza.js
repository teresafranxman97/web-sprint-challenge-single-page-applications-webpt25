import React from 'react';

function PizzaForm() {

  const handleChange = event => {
    const { checked, value, name, type } = event.target
    const returnValue = type === "checkbox" ? checked : value
  }

  const handleSubmit = event => {
      event.preventDefault()
      console.log("Form has been submitted!")
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>Build Your Own Pizza</h1>

        <div className="form-select">   
          <h2>Choice of Size</h2>
          <p>Required</p>  
            <label>
                <select name="size" onChange={handleChange}>
                    <option>Select</option>
                    <option>Small</option> 
                    <option>Medium</option> 
                    <option>Large</option>    
                </select> 
            </label>
        </div> 

        <div className="form-group-inputs">
          <h2> Choice of Sauce</h2> 
          <p>Required</p>
            <label>Original Red
                <input
                  type="radio"
                  name="sauce"
                  onChange={handleChange}
                />
            </label>  

            <label>Garlic Ranch
                <input
                  type="radio"
                  name="sauce"
                  onChange={handleChange}  
                />
            </label>

            <label>BBQ Sauce
                <input
                  type="radio"
                  name="sauce"
                  onChange={handleChange}  
                />
            </label>

            <label>Spinach Alfredo 
                <input
                  type="radio"
                  name="sauce"
                  onChange={handleChange}  
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
                  onChange={handleChange}
                />
            </label>

            <label>Canadian Bacon
                <input
                  type="checkbox"
                  name="bacon"
                  onChange={handleChange}
                />
            </label>

            <label>Spicy Italian Sausage
                <input
                  type="checkbox"
                  name="spicySausage"
                  onChange={handleChange}
                />
            </label>

            <label>Banana Peppers
                <input
                  type="checkbox"
                  name="bananaPeppers"
                  onChange={handleChange}
                />
            </label>

            <label>Onions
                <input
                  type="checkbox"
                  name="onions"
                  onChange={handleChange}
                />
            </label>

            <label>Green Peppers
                <input
                  type="checkbox"
                  name="greenPeppers"
                  onChange={handleChange}
                />
            </label>

            <label>Diced Tomatoes
                <input
                  type="checkbox"
                  name="dicedTomatoes"
                  onChange={handleChange}
                />
            </label>

            <label>Black Olives
                <input
                  type="checkbox"
                  name="olives"
                  onChange={handleChange}
                />
            </label>

            <label>Roasted Chicken
                <input
                  type="checkbox"
                  name="roastedChicken"
                  onChange={handleChange}
                />
            </label>

            <label>Pineapple
                <input
                  type="checkbox"
                  name="pineapple"
                  onChange={handleChange}
                />
            </label>

            <label>Extra Cheese
                <input
                  type="checkbox"
                  name="cheese"
                  onChange={handleChange}
                />
            </label>
        </div>

        <div className="form-instructions">
          <h2>Special instructions</h2>  
            <label>
                <input 
                  type="text"
                  name="instructions"
                  placeholder="Anything else you'd like to add?"
                  onChange={handleChange}
                />
            </label>
        </div>

        <div className="form-submit">
          <label>Add name
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}  
            />
          </label>  
          <button>Add to Order</button>
        </div>
      </form>
    )
}

export default PizzaForm;