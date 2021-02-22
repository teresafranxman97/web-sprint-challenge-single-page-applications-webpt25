import React from 'react';

function PizzaForm(props) {
  const { 
    values,
    change, 
  } = props

  const handleChange = event => {
    const { checked, value, name, type } = event.target
    const returnValue = type === "checkbox" ? checked : value
    change(name, returnValue)
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
                <select name="size" onChange={handleChange} value={values.size}>
                    <option value="">Select</option>
                    <option value="small">Small</option> 
                    <option value="medium">Medium</option> 
                    <option value="large">Large</option>    
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
                  value="OriginalRed"
                  checked={values.sauce === "OriginalRed"}
                  onChange={handleChange}
                />
            </label>  

            <label>Garlic Ranch
                <input
                  type="radio"
                  name="sauce"
                  value="GarlicRanch"
                  checked={values.sauce === "GarlicRanch"}
                  onChange={handleChange}  
                />
            </label>

            <label>BBQ Sauce
                <input
                  type="radio"
                  name="sauce"
                  value="BBQ"
                  checked={values.sauce === "BBQ"}
                  onChange={handleChange}  
                />
            </label>

            <label>Spinach Alfredo 
                <input
                  type="radio"
                  name="sauce"
                  value="SpinachAlfredo"
                  checked={values.sauce === "SpinachAlfredo"}
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
                  checked={values.pepperoni}
                  onChange={handleChange}
                />
            </label>

            <label>Canadian Bacon
                <input
                  type="checkbox"
                  name="bacon"
                  checked={values.bacon}
                  onChange={handleChange}
                />
            </label>

            <label>Spicy Italian Sausage
                <input
                  type="checkbox"
                  name="spicySausage"
                  checked={values.spicySausage}
                  onChange={handleChange}
                />
            </label>

            <label>Banana Peppers
                <input
                  type="checkbox"
                  name="bananaPeppers"
                  checked={values.bananaPeppers}
                  onChange={handleChange}
                />
            </label>

            <label>Onions
                <input
                  type="checkbox"
                  name="onions"
                  checked={values.onions}
                  onChange={handleChange}
                />
            </label>

            <label>Green Peppers
                <input
                  type="checkbox"
                  name="greenPeppers"
                  checked={values.greenPeppers}
                  onChange={handleChange}
                />
            </label>

            <label>Diced Tomatoes
                <input
                  type="checkbox"
                  name="dicedTomatoes"
                  checked={values.dicedTomatoes}
                  onChange={handleChange}
                />
            </label>

            <label>Black Olives
                <input
                  type="checkbox"
                  name="olives"
                  checked={values.olives}
                  onChange={handleChange}
                />
            </label>

            <label>Roasted Chicken
                <input
                  type="checkbox"
                  name="roastedChicken"
                  checked={values.roastedChicken}
                  onChange={handleChange}
                />
            </label>

            <label>Pineapple
                <input
                  type="checkbox"
                  name="pineapple"
                  checked={values.pineapple}
                  onChange={handleChange}
                />
            </label>

            <label>Extra Cheese
                <input
                  type="checkbox"
                  name="cheese"
                  checked={values.cheese}
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
                  value={values.instructions}
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
              value={values.name}
              onChange={handleChange}  
            />
          </label>  
          <button id="submitBtn">Add to Order</button>
        </div>
      </form>
  )
}

export default PizzaForm;