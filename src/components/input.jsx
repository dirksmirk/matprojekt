import { useState, useEffect, useContext } from 'react'
import { SearchContext } from '../Context'
import List from './list'
import MealMenu from './selectedMeal'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
//Våran function för input, som för tillfället hanterar sökrutan och fetch, sedan visar våran lista av recept samt visar receptet när man klickar på ett i listan
function Input() {
    //Vi börjar med att sätta några variabler här i början. useState använder vi för dynamisk data 
    //Food, setFood är för att dynamiskt samla datan ifrån våran fetch, så varje gång man söker sätter vi datan på nytt
    //Recipe, setRecipe använder vi för våra recept som ska visas när man klickar på ett recept i listan. Så när man klickar på ett recept i listan så setRecipe, som vi sedan kan visa med Recipe
    //Sedan vill vi spara våran använderas input i search som en useRef för att kunna referera till igenom projektet
    const [Food, setFood] = useState(null)
    const [Recipe, setRecipe] = useState(null)

    const { myValue } = useContext(SearchContext);

    // Med vårat context API så kan vi ange search datan uppe i våran Header. Våran useEffect går sedan igång varje gång myValue förändras för att visa våran lista
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${myValue}`)
        .then((response) => response.json())
        .then(result => {
          console.log(result)
          console.log(result.meals)
          setFood(result.meals)
        })
        .catch(error => {
          console.log(error)
        })
    }, [myValue])

     return (
        <Grid container columnSpacing={4} width='95%' height='95%' className='meal-container'>
            {/* Dessa två divar rendererar våran lista av recept samt visar vårat recept. Food && och Recipe && gör så att dem också endast rendererar när Food och Recipe har ett värde */}
            <Grid xs={4} height='720px' overflow='auto' className="Food-List">
              {/* handleRecipeClick använder vi för att skicka vidare setRecipe till våran list komponent, som  vi i sin tur använder för att skicka datan till våran MealMenu för att visa individuella recept */}
              {Food && <List Food={Food} handleRecipeClick={setRecipe} title="all food" />}
            </Grid>
            <Grid xs={8} height='720px' overflow='auto' className='recipe-display'>
              {Recipe && <MealMenu Recipe={Recipe} title="recipe" /> }
            </Grid>
           </Grid>
       );
      }

export default Input;