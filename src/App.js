import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//import Navbar from './components/Navbar'
//import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import All from './components/All'
import SignInSide from './components/Home'
// import User from './components/User'
import Company from './components/Company'
import EngineerCard from './components/EngineerCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <div className="container">
            <Route exact path="/" component={SignInSide} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/all" component={All} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/company" component={Company} />
            <Route path='/card' exact component={Card} />
            <Route path='/eCard' exact component={EngineerCard} />
            
          </div>
        </div>
      </Router>
    )
  }
}

export default App
