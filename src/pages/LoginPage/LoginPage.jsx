

const LoginPage = () => {
    return (
        <div className="login">
            <h2 className="login-header">Login</h2>
            <form>
                <label htmlFor="email">Email: </label>
                <input className='email-input' type="email" id="email" required/>
                <label htmlFor="password">Password: </label>
                <input className='password-input' type="password" name="password" id="password" required/>
                <button className='sign-button' type="sumbit">Sign In</button>
            </form>
        </div>
    )
}

export default LoginPage;