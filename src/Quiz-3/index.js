import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
  Route,
  Link
} from "react-router-dom"
import './public/css/style.css'
import NavBar from './NavBar'
import About from './About'
import Home from './Home'
import Movie from './movie/Movie'
import Login from './Login'
import {LoginProvider} from './LoginContext'

export default function App() {
      return (
          <LoginProvider>
              
          <Router>
              <div>
                  <NavBar/>
              </div>
                
                <section>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/About" component={About}/>
                  <Route exact path="/Movie" component={Movie}/>
                  <Route exact path="/Login" component={Login}><Login/></Route>                   
              </Switch>
              </section>
          </Router>
          </LoginProvider>
      )
}