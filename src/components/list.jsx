/* eslint-disable react/prop-types */
const List = ({ Food, handleRecipeClick }) => {

    return (
        <>
            {Food.map((meal) => (
                <div className='meal-list-preview' key={meal.idMeal}  onClick={() => handleRecipeClick(meal)} >
                  <img src={meal.strMealThumb} alt="picture of food" />
                  <h2>{ meal.strMeal }</h2>
                </div>
              ))
            }
        </>
    )
}

export default List;