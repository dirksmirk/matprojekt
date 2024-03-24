/* eslint-disable react/prop-types */
const MealMenu = ({ Recipe }) => {

    const ingredients = Object.keys(Recipe) // eller vad ditt objekt nu heter
    .filter(key => key.startsWith('strIngredient') && Recipe[key])
    .map(key => Recipe[key]);

    console.log(ingredients)
    return (
        <>
                <div className='meal-recipe' key={Recipe.idMeal}>
                  <h2>{ Recipe.strMeal }</h2><br />
                  <img src={Recipe.strMealThumb} alt="picture of food" /><br />
                  <h3>Ingredients:</h3><br />
                  <ul>
                    {
                        ingredients.map((ingredient, idx) => (
                            <li key={idx}>
                                <p>Contains: {ingredient}</p>
                            </li>
                        ))
                    }
                  </ul>

                </div>
        </>
    )
}

export default MealMenu;