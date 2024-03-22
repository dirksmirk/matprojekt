import { useState, /* useEffect */ useRef } from 'react'

function Search() {
    const [Food, setFood] = useState(null)

    const input = useRef()
    
    const getFood = () => {
      const name = input.current.value
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        .then((response) => response.json())
        .then(result => {
          console.log(result)
          setFood(result)
        })
    }
    
     return (
       <>
           {/* Input for entering food name, input is gathered in the input field but activates when clicking the button */}
           <input type="text" /* onInput={getFood} */ ref={input} placeholder="Enter an ID" />
           <br />
           <button onClick={getFood}>Search</button>
         </>
       )
      }


export default Search