import { useContext, useRef } from "react";
import { SearchContext } from "../Context";
import { Box, Button, TextField, Typography } from '@mui/material';

const Header = () => {
    const { myUpdateFunc } = useContext(SearchContext);
    const input = useRef();
  
    const handleSearch = () => {
      const inputValue = input.current.value.trim(); // Remove leading and trailing whitespaces
      myUpdateFunc(inputValue);
    };

    return (
        <Box className="Header">
            <Typography variant="h1" className="webHead">Great recipes</Typography>
            <Typography variant="subtitle1">So many great recipes all in one place!</Typography>
            <Typography variant="subtitle2">Please search and look around to find your favorite one</Typography>
            <TextField id="outlined-basic" label="Search" variant="outlined" size="small" inputRef={input} placeholder="Search for a recipe!" />
            <Button onClick={handleSearch} variant="contained" size="medium">Search</Button>
        </Box>
        
    )
};

export default Header;