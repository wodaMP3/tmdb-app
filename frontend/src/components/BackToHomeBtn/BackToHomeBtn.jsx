import { Link } from "react-router-dom";
import './BackToHomeBtn.css';
import { Button } from "@mui/material";

const BackToHomeBtn = () => {
    return (
            <Link to='/'>
                <Button className="backTo-btn" style={{
                    color: 'white',
                    position: "fixed",
                    top: 0,
                    marginTop: 20
                }}>Home</Button>
            </Link>
    )
}

export default BackToHomeBtn;