const Search = () => {
    const getFood = () => {
        const name = input.current.value
          fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
          .then((response) => response.json())
          .then(result => {
            console.log(result)
            console.log(result.meals)
            setFood(result)
            console.log(Food)
            console.log(Food.meals)
            console.log(Food.meals[0])
          })
      }
}

export default Search;