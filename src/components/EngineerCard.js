import React, { Component } from 'react'
import axios from 'axios'

import { Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/Home.css'
import './Company.js'
import Pictarka from '../Images/logo.png';
import Avatar from '../Images/avatar.jpg';
import Bell from '../Images/bell.png';
import Chat from '../Images/chat.png';

class EngineerCard extends Component {

  state = {
    users: [],
    id: '',
    errors: null
  };

  logout = e => {
    localStorage.removeItem('usertoken')
    localStorage.removeItem('email')
    localStorage.removeItem('position')
    localStorage.removeItem('emailEng')
    this.props.history.push('/login');
  }
  back=e=>{
    localStorage.removeItem('emailEng')
    this.props.history.push('/company');
  }


  componentDidMount() {
    const token = localStorage.getItem("usertoken")
    const emailEng = localStorage.getItem("emailEng")
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    axios
      .get(`http://localhost:8000/engineer/${emailEng}`, config)
      .then(response => {
        console.log('dataaaaaaaaaaaaaa', response)
        this.setState({
          users: response.data.response,
        });

      })
      .catch(error => this.setState({ error }));
  }




  render() {
    console.log(this.state.users[0])
    const { users } = this.state
    console.log(this.state, 'cekkk')
    return (
      <div className="container-home">
        <Navbar className='navbar-style'>
          <Navbar.Brand>
            <img
              alt="Pictarka"
              src={Pictarka}
            />
          </Navbar.Brand>
          <input className='navbar-search' type="text" name="search" placeholder="Search.."></input>
          {/* <Link to='/all'> */}
            <Navbar.Text id='nav-text'>
              PROFILE
                </Navbar.Text>
          {/* </Link> */}
          <img src={Avatar} alt="Avatar" className="nav-avatar" />

          <NavDropdown id="nav-dropdown">
            <NavDropdown.Item onClick={e => {
              this.back(e)
            }}>Back</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={e => {
              this.logout(e)
            }}>Logout
                </NavDropdown.Item>
          </NavDropdown>

          <div className='border-vertical'>
          </div>
          <img src={Chat} alt="Chat" className="nac-chat" />
          <img src={Bell} alt="Bell" className="nav-bell" />

        </Navbar>
        <React.Fragment>
          {/* <div className="col">
          <h2>Engineer Data</h2>
            {users.map(user => 
            <div key={user.id}>
              <ul>
                <li>
                  <p>Id     : {user.id}</p>
                  <p>Name     : {user.name}</p>
                  <p>Description: {user.description}</p>
                  <p>Skill    : {user.skill}</p>
                  <p>Location : {user.location}</p>
                  <p>Date of Birth : {user.birth}</p>
                  <p>Showcase : {user.showcase}</p>
                  <p>Date Created : {user.created}</p>
                  <p>Date Updated : {user.updated}</p>
                  <p>Email : {user.email}</p>
                </li>
              </ul>
            </div>
            )}
            
          </div> */}

          <div className="container">
            <div className="jumbotron mt-5">
              <div className="col-sm-8 mx-auto">
                <h1 className="text-center">PROFILE</h1>
              </div>
              {users.map(user =>
                <table key={user.id} className="table col-md-6 mx-auto">
                  <tbody >
                    <tr>
                      <td>Name</td>
                      <td>{user.name}</td>
                    </tr>
                    <tr>
                      <td>Description</td>
                      <td>{user.description}</td>
                    </tr>
                    <tr>
                      <td>Skill</td>
                      <td>{user.skill}</td>
                    </tr>
                    <tr>
                      <td>Location</td>
                      <td>{user.location}</td>
                    </tr>
                    <tr>
                      <td>Date of Birth</td>
                      <td>{user.birth}</td>
                    </tr>
                    <tr>
                      <td>Showcase</td>
                      <td>{user.showcase}</td>
                    </tr>
                  </tbody>
                </table>
              )}


            </div>
          </div>

        </React.Fragment>
      </div>
    );
  }
}
export default EngineerCard