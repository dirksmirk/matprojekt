/* eslint-disable react/prop-types */
const MealMenu = ({ Recipe }) => {
  //Vi använder .keys objektet här för att sortera ut våra ingredienser som börjar med strIngredient
  //så .keys returnerar namnen på objekt, medans .filter sedan filtrerar dessa namn och sedan använder vi .map för att sätta ihop det vi filtrerat ut
  const ingredients = Object.keys(Recipe)
    .filter(key => key.startsWith('strIngredient') && Recipe[key])
    .map(key => Recipe[key])
  //console.log för att dubbelkolla våran ingredients array fått in korrekta objekt med värden
  console.log(ingredients)
  //Våran return returnerar vårat recept inom en div.
  //Vi vill ha namnet på receptet högst up, följt utav en bild, följt utav en lista av ingredienser med deras måt och till sist beskrivningen av receptet
  return (
    <>
      <div className='meal-recipe' key={Recipe.idMeal}>
        <h2>{Recipe.strMeal}</h2>
        <br />
        <img src={Recipe.strMealThumb} alt='picture of food' />
        <br />
        <h3>Ingredients:</h3>
        <br />
        <ul>
          {ingredients.map((ingredient, idx) => (
            <li key={idx}>
              <p>Contains: {ingredient}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default MealMenu
