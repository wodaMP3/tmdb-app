import { Link } from "react-router-dom";


const RegistrationPage = () => {
    <div className="registration">
        <h2 className="registration-header">Sign Up</h2>
        <form>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" required/>
            <label htmlFor="email">Email:</label>
            <input type="email" id="mail" name="email" required/>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" required/>
            <label htmlFor="password">Confirm Password: </label>
            <input type="password" id="confirmPassword" name="ConfirmPassword" required/>
            <button type="sumbit">Sign Up</button>
        </form>
    </div>
}

export default RegistrationPage;