import { useState, useEffect, useRef } from 'react'

function Search() {
    const [Food, setFood] = useState("")

    const input = useRef()

    useEffect(() => {
        fetch('www.themealdb.com/api/json/v1/1/search.php?s='+input)
        .then((response) => response.json())
        .then((result) => setFood(result))
    

    }, []);
    
    return (
        <>
          {/* Display selected post if exists */}
          {Food &&
            <div className="card">
              <p>Current Food title: {Food.title}</p>
              <p>Current Food body: {Food.body}</p>
            </div>
          }
          {/* Input for entering post ID */}
          <input type="text" onInput={getPost} ref={input} placeholder="Enter an ID" />
          <br /><br />
          {/* Render mock data if available */}
          {mockData.length > 0 && mockData.map((data, idx) => (
            <div className="card" key={idx}>
              {data.title} <br />
              {data.body}
            </div>
          ))}
        </>
      )
}



export default Search