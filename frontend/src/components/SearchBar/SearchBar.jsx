import { TextField } from "@mui/material";
import './SearchBar.css';

const Search = () => {

    return (
        <TextField className="search-bar" id="standard-basic" label="Search" variant="standard" sx={{
            color: "white"
        }} />
    )
}

export default Search;
