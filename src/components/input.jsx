import { useState, useEffect /* useRef */ } from 'react'

function Search() {
    const [Food, setFood] = useState(null)

  /*   const input = useRef() */

    useEffect(() => {
      fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=pilaf')
        .then((response) => response.json())
        .then(result => {
          console.log(result)
          setFood(result)
        })
    }, [])
    
    /* const getFood = () => {
      const name = input.current.value
        fetch(`www.themealdb.com/api/json/v1/1/search.php?s=pilaf`)
        .then((response) => response.json())
        .then((result) => setFood(result))
    } */
    
    // return (
    //   <>
    //       {/* Display selected post if exists */}
    //       {Food &&
    //         <div className="card">
    //           <p>Current Food title: {Food.title}</p>
    //           <p>Current Food body: {Food.body}</p>
    //         </div>
    //       }
    //       {/* Input for entering post ID */}
    //       <input type="text" onInput={getFood} ref={input} placeholder="Enter an ID" />
    //       <button  >Search</button>
    //       <br /><br />
    //       {/* Render mock data if available */}
          
    //     </>
    //   )
      }



export default Search