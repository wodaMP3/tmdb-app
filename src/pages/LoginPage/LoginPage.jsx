import { useContext, useEffect, useState } from "react";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import axios from 'axios';
import './LoginPage.css';
import { AuthContext } from "../../utils/auth";
import { options } from "../../utils/auth";
import { Link } from "react-router-dom";

const authURL = 'https://api.themoviedb.org/3/authentication/token/validate_with_login';
const bearer = import.meta.env.VITE_BEARER;

const LoginPage = () => {

    const [data, setData] = useState([]);
    const isAunthenticated = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const options = {
                    method: 'POST',
                    url: authURL,
                    headers: {
                        accept: 'application/json',
                        'content-type': 'application/json',
                        Authorization: `Bearer ${bearer}`
                    }
                }

                const response = await axios.request(options);
            setData(response.data);
            console.log('Authorization successful:', response.data);
            } catch (error) {
                console.error('failed to fetch authorization:', error.message || error.response.data)
                setData([]);
            }
        };

        if(isAunthenticated) {
            fetchData();
            <Link to='/'></Link>
        }
    }, [isAunthenticated])

    return (
        <div className="login">
            <h2 className="login-header">Login</h2>
            <form>
                <label htmlFor="email">Email: </label>
                <input className='email-input' type="email" id="email" required/>
                <label htmlFor="password">Password: </label>
                <input className='password-input' type="password" name="password" id="password" required/>
                <button>login</button>
                <div>
                    <p>
                        Still have no account? 
                            Sign up for free!
                    </p>
                        <RegistrationPage />
                </div>
            </form>
        </div>
    )
}

export default LoginPage;