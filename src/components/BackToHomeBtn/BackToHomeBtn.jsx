import { Link } from "react-router-dom";
import './BackToHomeBtn.css';
import { Button } from "@mui/material";

const BackToHomeBtn = () => {
    return (
        <div className="back-home">
            <Link to='/'>
                <Button className="backTo-btn" sx={{
                    color: 'white'
                }}>Home</Button>
            </Link>
        </div>
    )
}

export default BackToHomeBtn;