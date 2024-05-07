import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import './GoToFavsButton.css'

const GoToFavsButton = () => {

    return (
        
        <Link to='/favourites'>
            <Button className="favs-btn" sx={{
                color: 'white',
                position: "fixed",
                top: 0,
                marginTop: 3
            }}>
                Favourites
            </Button>
            </Link>
    );
}

export default GoToFavsButton;