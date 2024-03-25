/* eslint-disable react/prop-types */
const MealMenu = ({ Recipe }) => {
  //Vi använder .keys objektet här för att sortera ut våra ingredienser som börjar med strIngredient
  //så .keys returnerar namnen på objekt, medans .filter sedan filtrerar dessa namn och sedan använder vi .map för att sätta ihop det vi filtrerat ut
  const ingredients = Object.keys(Recipe)
    .filter(key => key.startsWith('strIngredient') && Recipe[key])
    .map(key => Recipe[key])
  //We want to also 
  const measures = Object.keys(Recipe)
  .filter(key => key.startsWith('strMeasure') && Recipe[key])
  .map(key => Recipe[key])
  .filter(measure => measure.trim() !== '')

  const ingredientMeasure = Object.keys(ingredients, measures).map((ingredient, measure) => `${ingredients[ingredient]} ${measures[measure]}`)

/*     const ingredentMeasure = Object.keys(Recipe)
  .filter(key => key.startsWith('strIngredient') && Recipe[key])
  .map((key, index) => `${Recipe[key]} ${Recipe[`strMeasure${index + 1}`]}`)
  .filter(combined => combined.trim() !== '') */


  //console.log för att dubbelkolla våran ingredients array fått in korrekta objekt med värden
  console.log(ingredients)
  console.log(measures)
  console.log(ingredientMeasure)

  const TagNull = 'mo tags';
  const Tags = Recipe.strTags;

  //Våran return returnerar vårat recept inom en div.
  //Vi vill ha namnet på receptet högst up, följt utav en bild, följt utav en lista av ingredienser med deras måt och till sist beskrivningen av receptet
  return (
    <>
      <div className='meal-recipe' key={Recipe.idMeal}>
        <h2>{Recipe.strMeal}</h2>
        <br />
        <img src={Recipe.strMealThumb} alt='picture of food' />
        <br />
        Tags: {Recipe.strTags == null ? TagNull : Tags}
        <br />
        <h3>Ingredients:</h3>
        <br />
        <ul>
          {ingredientMeasure.map((content, idx) => (
            <li key={idx}>
              <p>Contains: {content} </p>
            </li>
          ))}
        </ul><br />
        <p>{Recipe.strInstructions}</p>
      </div>
    </>
  )
}

export default MealMenu
