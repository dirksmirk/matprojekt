import { useState, useRef } from 'react'
import List from './list'
import MealMenu from './selectedMeal'

function Input() {
    const [Food, setFood] = useState(null)
    const [Recipe, setRecipe] = useState(null)
    const input = useRef()

    const getFood = () => {
      const name = input.current.value
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        .then((response) => response.json())
        .then(result => {
          console.log(result)
          console.log(result.meals)
          setFood(result.meals)
          console.log(Food)
        })
        .catch(error => {
          console.log(error)
        })
    }
    
    const handleRecipeClick = (recipe) => {
      setRecipe(recipe);
    };

     return (
       <>
        <div className='meal-container'>
            {/* Input for entering food name, input is gathered in the input field but activates when clicking the button */}
            <input type="text" ref={input} placeholder="Enter an ID" />
            <br />
            <button onClick={getFood}>Search</button>
            <br />
            <div className="Food-List">
              {Food && <List Food={Food} handleRecipeClick={handleRecipeClick} title="all food" />}
            </div>
            <div className='recipe-display'>
              {Recipe && <MealMenu Recipe={Recipe} title="recipe" /> }
            </div>
           </div>
         </>
       );
      }

export default Input;