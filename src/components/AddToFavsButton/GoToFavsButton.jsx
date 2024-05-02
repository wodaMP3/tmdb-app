import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const GoToFavsButton = () => {

    return (
        
        <Link to='/favourites'>
                <Button className="backTo-btn" style={{
                    color: 'white',
                    position: "fixed",
                    top: 0,
                    marginTop: 20
                }}>Home</Button>
            </Link>
    );
}

export default GoToFavsButton;