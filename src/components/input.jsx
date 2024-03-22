import { useState, /* useEffect */ useRef } from 'react'
import List from './list'

function Search() {
    const [Food, setFood] = useState(null)

    const input = useRef()
    

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
    
     return (
       <>
           {/* Input for entering food name, input is gathered in the input field but activates when clicking the button */}
           <input type="text" /* onInput={getFood} */ ref={input} placeholder="Enter an ID" />
           <br />
           <button onClick={getFood}>Search</button>
           <br />
           <div className="Food-List">
            {Food && <List Food={Food} title="all food" />}
           </div>
         </>
       );
      }


export default Search