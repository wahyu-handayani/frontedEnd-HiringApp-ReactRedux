import React, { Component } from 'react'
import axios from 'axios'

import { Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/Home.css'
// import './All.css'
import Pictarka from '../Images/logo.png';
import Avatar from '../Images/avatar.jpg';
import Bell from '../Images/bell.png';
import Chat from '../Images/chat.png';
import { connect } from "react-redux";
import { getOneUser } from "../Redux/Actions/users";

class All extends Component {

  state = {
    users: [],
    errors: null
  };

  update=e=>{
    localStorage.setItem('update', 'benar')
    this.props.history.push('/profile')
  }
  logout = e => {
    localStorage.removeItem('usertoken')
    localStorage.removeItem('email')
    localStorage.removeItem('position')
    localStorage.removeItem('update')
    localStorage.removeItem('id')
    this.props.history.push('/login');

  }


  async componentDidMount() {
    const email = localStorage.getItem("email")
    const token = localStorage.getItem("usertoken")
    await this.props.dispatch(getOneUser(email))
    .then(response=>{
      this.setState({
        users: response.value.data.response,
      });
      console.log(response.value.data.response,'ooopp')
    })
    .catch(error => this.setState({ error }));
    
    // console.log(email)
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // }
    // axios
    //   .get(`http://localhost:8000/engineer/${email}`, config)
    //   .then(response => {
    //     console.log('dataaaaaaaaaaaaaa', response)
    //     this.setState({
    //       users: response.data.response,
    //     });

    //     console.log(response.data.response,'lssssssssssssssssssssssssssssssss')
    //   })
    //   .catch(error => this.setState({ error }));
  }




  render() {
    console.log(this.state.users[0],'jooooooooo')
    const { users } = this.state
    users.map(user=>{
      localStorage.setItem('id',user.id)
    })
    
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
          <Link to='/all'>
            <Navbar.Text id='nav-text'>
              PROFILE
                </Navbar.Text>
          </Link>
          <img src={Avatar} alt="Avatar" className="nav-avatar" />

          <NavDropdown id="nav-dropdown">
            <NavDropdown.Item onClick={this.update}>Update Data</NavDropdown.Item>
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
// export default All
const mapStateToProps = state => {
  return {
    users: state.oneUser
  };
};
export default connect(mapStateToProps)(All);