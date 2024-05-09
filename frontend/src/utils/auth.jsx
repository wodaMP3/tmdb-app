// import axios from "axios";
// import { createContext, useEffect, useState } from "react";

// const AuthContext = createContext();
// const bearer = import.meta.env.VITE_BEARER;

// const AuthProvider = ({ children }) => {
//     const [isAunthenticated, setIsAunthenticated] = useState(false);

//     useEffect(()=> {
//         const token = localStorage.getItem('token');
//         setIsAunthenticated(!token);
//     }, [])

//     return <AuthContext.Provider value={isAunthenticated}>{children}
//             </AuthContext.Provider>
// }


// const authURL = 'https://api.themoviedb.org/3/authentication/token/validate_with_login';

// const options = {
//     method: 'POST',
//     url: authURL,
//     headers: {
//         accept: 'application/json',
//         'content-type': 'application/json',
//         Authorization: `Bearer ${bearer}`
//     }
// }

// export { AuthContext, AuthProvider, options }
