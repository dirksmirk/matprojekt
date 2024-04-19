import { useContext, useRef } from "react";
import { SearchContext } from "../Context";
import { Button, TextField } from '@mui/material';

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
            <TextField id="outlined-basic" label="Search" variant="outlined" size="small" inputRef={input} placeholder="Search for a recipe!" />
            <Button onClick={handleSearch} variant="contained" size="medium">Search</Button>
        </div>
        
    )
};

export default Header;