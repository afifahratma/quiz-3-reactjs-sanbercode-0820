import React, { useContext } from 'react'
import { LoginContext } from './LoginContext'
import { Link } from 'react-router-dom'
import './public/css/login.css'

const Login = () => {
    const [login,setLogin] = useContext(LoginContext)
    const handleClick = (event) => {
        event.target.value === 'login' ? setLogin('logout') : setLogin('login')
    }
    return (
        <div className="Login">
            <h1>Login</h1>
            <form>
                    <strong>Username :</strong>
                    <input className="login-input" type="text" placeholder="Enter Username" required /><br/>
                
                    <strong>Password: </strong>
                    <input className="login-input" type="password" placeholder="Enter Password"required/>
            
            </form>
            <Link to="/"  onClick={handleClick} value={login}><button id="btn-login">Login</button></Link>
            {console.log(login)}
        </div>
    )
}
export default Login