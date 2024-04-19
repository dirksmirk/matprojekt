import { Box, Typography } from "@mui/material"

/* eslint-disable react/prop-types */
const MealMenu = ({ Recipe }) => {
  //Vi använder .keys objektet här för att sortera ut våra ingredienser som börjar med strIngredient
  //så .keys returnerar namnen på objekt, medans .filter sedan filtrerar dessa namn och sedan använder vi .map för att sätta ihop det vi filtrerat ut
  const ingredients = Object.keys(Recipe)
    .filter(key => key.startsWith('strIngredient') && Recipe[key])
    .map(key => Recipe[key])
  //We want to also sort out our measurements. Now these measurements also require a trim, because the API sends a lot of measurements as " ", a blank space, which we don't want as empty strings in our array
  const measures = Object.keys(Recipe)
  .filter(key => key.startsWith('strMeasure') && Recipe[key])
  .map(key => Recipe[key])
  .filter(measure => measure.trim() !== '')
  //Then we want to combine our ingredients and measurements together for a better display in the ingredients tab
  const ingredientMeasure = Object.keys(ingredients, measures).map((ingredient, measure) => `${ingredients[ingredient]} - ${measures[measure]}`)

/*     const ingredentMeasure = Object.keys(Recipe)
  .filter(key => key.startsWith('strIngredient') && Recipe[key])
  .map((key, index) => `${Recipe[key]} ${Recipe[`strMeasure${index + 1}`]}`)
  .filter(combined => combined.trim() !== '') */

  //console.log för att dubbelkolla våran ingredients array fått in korrekta objekt med värden
  console.log(ingredients)
  console.log(measures)
  console.log(ingredientMeasure)

  //om vi har eller inte har några tags vill posta olika meddelanden
  const TagNull = 'no tags';
  const Tags = Recipe.strTags;

  //Våran return returnerar vårat recept inom en div.
  //Vi vill ha namnet på receptet högst up, följt utav en bild, följt utav en lista av ingredienser med deras måt och till sist beskrivningen av receptet
  return (
    <>
      <Box className='meal-recipe' key={Recipe.idMeal}>
        <Typography variant="h2">{Recipe.strMeal}</Typography>
        <Typography variant="subtitle2"> Category: {Recipe.strCategory} </Typography>
        <br />
        <img src={Recipe.strMealThumb} alt='picture of food' />
        <br />
        <Typography variant="body2"> 
        Tags: {Recipe.strTags == null ? TagNull : Tags}
        </Typography>
        <br />
        <Typography variant="h3">Ingredients:</Typography>
        <Typography>
        <ul>
          {ingredientMeasure.map((content, idx) => (
            <li key={idx}>
              <p>{content}</p>
            </li>
          ))}
        </ul>
        </Typography>
        <Typography variant="body1">
          {Recipe.strInstructions.split('\r\n').map((instr, idx) => (
              <p key={idx} className="">{instr}</p>
          ))}
        </Typography>
      </Box>
    </>
  )
}

export default MealMenu
