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
            <h1>Log In</h1>
            <form>
                <label htmlFor='nama'>
                    <b>Username</b><input type="text" placeholder="Enter Username" required /><br/>
                </label>
                <label htmlFor='pass'>
                    <b>Pass</b><input type="password" placeholder="Enter Password"required/>
                </label>
            </form>
            <Link to="/"  onClick={handleClick} value={login}><button>Login</button></Link>
            {console.log(login)}
        </div>
    )
}
export default Login