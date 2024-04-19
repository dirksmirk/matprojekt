import { useContext, useRef } from "react";
import { SearchContext } from "../Context";

const Header = () => {
    
    const { myUpdateFunc } = useContext(SearchContext);
    const input = useRef();
  
    const handleSearch = () => {
      const inputValue = input.current.value.trim(); // Remove leading and trailing whitespaces
      myUpdateFunc(inputValue);
    };

    return (
        <div className="Header">
            <h1 className="webHead">Great recipes</h1>
            <p>So many great recipes all in one place!</p>
            <p>Please search and look around to find your favorite one</p>
            <input type="text" ref={input} placeholder="Enter an ID" />
            <button onClick={handleSearch}>Search</button>
        </div>
        
    )
};

export default Header;