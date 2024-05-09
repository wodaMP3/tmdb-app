// import { useEffect, useState } from "react";
// import RegistrationPage from "../RegistrationPage/RegistrationPage";
// import axios from 'axios';
// import './LoginPage.css';

const { googleProvider } = require("../../firebase")

// const bearer = import.meta.env.VITE_BEARER;
// const requestNewTokenURL = `https://api.themoviedb.org/3/authentication/token/new`;
// const permissionURL = `https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}`;

// const LoginPage = () => {


//     const [token, setToken] = useState('');
    

//     useEffect(() => {
//         const requestToken = async () => {
//             const options = {
//               method: 'GET',
//               url: requestNewTokenURL,
//               headers: {
//                 accept: 'application/json',
//                 'content-type': 'application/json',
//                 Authorization: `Bearer ${bearer}`
//               }
//             };
        
//             try {
//               const response = await axios.request(options);
//               setToken(response.data.request_token);
//               console.log('Request new token successful:', response.data);

//               const validateToken = await axios.post('http://localhost:5000/authentication/session/new', {
//                 request_token: response.data.request_token
//               });
//               console.log('Token validation successful:', validateToken.data)
//             } catch (error) {
//               console.error('Failed to validate new token:', error);
//             }
//         };
//         requestToken();

//     }, [])
    

//     return (
//         <div className="login-container">
//             <h2 className="login-header">Login</h2>
//             <form>
//                 <label htmlFor="email">Email: </label>
//                 <input className='email-input' type="login" id="login"  required/>
//                 <label htmlFor="password">Password: </label>
//                 <input className='password-input' type="password" name="password" id="password" required/>
//                 <button>login</button>
//                 <div>
//                     <p>
//                         Still have no account? 
//                             Sign up for free!
//                     </p>
//                         <RegistrationPage />
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default LoginPage;
