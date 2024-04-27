import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import './LoginButton.css';


const LoginButton = () => {

    return (
        <div className="login-splash">
            <Link to='/login'>
            <Button className='login-btn' sx={{
                color: 'white'
            }}>Login</Button>
            </Link>
        </div>
    )
}

export default LoginButton;