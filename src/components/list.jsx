/* eslint-disable react/prop-types */
const List = ({ Food }) => {

    console.log(Food)
    return (
        <>
            {Food.meals.map((meal) => (
                <div className='meal-preview' key={meal.idMeal}>
                  <h2>{ meal.strMeal }</h2>
                  <p>Contains: { meal.strIngredient1 }</p>
                </div>
              ))
            }
        </>
    )
}

export default List;