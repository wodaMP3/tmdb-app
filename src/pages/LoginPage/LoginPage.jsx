import { useContext, useEffect, useState } from "react";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import axios from 'axios';
import './LoginPage.css';
import { AuthContext } from "../../utils/auth";
import { options } from "../../utils/auth";
import { Link } from "react-router-dom";

const bearer = import.meta.env.VITE_BEARER;
const requestNewTokenURL = `https://api.themoviedb.org/3/authentication/token/new`;
const permissionURL = `https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}`;

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSumbit = async (event) => {
        event.preventDefault();
    }

    const [data, setData] = useState([]);
    const isAunthenticated = useContext(AuthContext);

    useEffect(() => {
        const requestToken = async () => {
            const options = {
              method: 'GET',
              url: requestNewTokenURL,
              headers: {
                accept: 'application/json',
                Authorization: `Bearer ${bearer}`
              }
            };
        
            try {
              const response = await axios.request(options);
              setData(response.data);
              console.log('Request new token successful:', response.data);
            } catch (error) {
              console.error('Failed to request new token:', error);
            }
        };
        requestToken();
    }, [])

    

      const handleLogin = async () => {
        const options = {
          method: 'GET',
          url: permissionURL,
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${bearer}`
          }
        };
    
        try {
          const response = await axios.request(options);
          setData(response.data);
          console.log('Authorization successful:', response.data);
        } catch (error) {
          console.error('Failed to fetch authorization:', error);
        }
      };
    

    return (
        <div className="login">
            <h2 className="login-header">Login</h2>
            <form onSubmit={handleSumbit}>
                <label htmlFor="email">Email: </label>
                <input className='email-input' type="email" id="email" value={email} onChange={handleEmailChange} required/>
                <label htmlFor="password">Password: </label>
                <input className='password-input' type="password" name="password" id="password" value={password} onChange={handlePasswordChange} required/>
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