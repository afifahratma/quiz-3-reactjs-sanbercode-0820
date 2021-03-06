
import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import './public/css/style.css'
import logo from './public/img/logo.png'
import { LoginContext } from './LoginContext'

export default function NavBar(){
 const [isLogin] = useContext(LoginContext)
    return(
        <div>
          <link href="public/css/style.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet" />
          <header>
            <img src={logo} alt={logo} width="200px" />
            <nav>
              <ul>
                <li>
                  <Link className="for-link" to="/"> Home </Link> 
                  </li>
                <li>
                <Link className="for-link" to="/About"> About </Link> 
                  </li>
               {isLogin === 'login' && (
                  <li>
                        <Link className="for-link"  to="/Movie" >Movie List Editor</Link>
                   </li>
                  )}
                    {isLogin !== 'login' && (<li>
                        <Link className="for-link"  to="/Login">Login</Link>
                    </li>)} 
              </ul>
            </nav>
          </header>
          </div>
    )
    
}