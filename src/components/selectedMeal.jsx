/* eslint-disable react/prop-types */
const MealMenu = ({ Recipe }) => {

    return (
        <>
                <div className='meal-recipe' key={Recipe.idMeal}>
                  <h2>{ Recipe.strMeal }</h2><br />
                  <img src={Recipe.strMealThumb} alt="picture of food" /><br />
                  <h3>Ingredients:</h3><br />
                  <p>Contains: { Recipe.strIngredient1 }</p>

                </div>
        </>
    )
}

export default MealMenu;