import { Card, CardContent, CardMedia, Typography  } from "@mui/material";
/* eslint-disable react/prop-types */
const List = ({ Food, handleRecipeClick }) => {

    return (
        <>
            {Food.map((meal) => (
                <Card sx={{ m: 5, p: 1, mx: 'auto', backgroundColor: 'beige' }} className='meal-list-preview' key={meal.idMeal}  onClick={() => handleRecipeClick(meal)} >
                  <CardMedia component="picture" sx={{ width: '200%', mx: 'auto'}}>
                    <img src={meal.strMealThumb} alt="picture of food" />
                  </CardMedia>
                  <CardContent>
                    <Typography variant="h2">{ meal.strMeal }</Typography>
                  </CardContent>
                </Card>
              ))
            }
        </>
    )
}

export default List;