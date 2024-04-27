import { Link } from "react-router-dom";
import './LoginButton.css';


const LoginButton = () => {

    return (
        <div className="login-splash">
            <Link to='/login'>
                <button className="login-btn">Sing In!</button>
            </Link>
        </div>
    )
}

export default LoginButton;