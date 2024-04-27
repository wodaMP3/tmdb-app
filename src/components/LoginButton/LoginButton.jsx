import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import './LoginButton.css';


const LoginButton = () => {

    return (
            <Link to='/login'>
            <Button className='login-btn' style={{
                color: 'white',
                position: "fixed",
                top: 0,
                marginTop: 20 
            }}>Login</Button>
            </Link>
    )
}

export default LoginButton;