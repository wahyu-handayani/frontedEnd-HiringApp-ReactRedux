import React, { Component } from 'react'
import axios from 'axios'
import { Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/Home.css'
import Pictarka from '../Images/arka.png';
import Avatar from '../Images/avatar.jpg';
import Bell from '../Images/bell.png';
import Chat from '../Images/chat.png';

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      name: '',
      description: '',
      skill: '',
      location: '',
      birth: '',
      showcase: '',
      email: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  logout = e => {
    localStorage.removeItem('usertoken')
    localStorage.removeItem('email')
    localStorage.removeItem('position')
    localStorage.removeItem('update')
    localStorage.removeItem('id')
    this.props.history.push('/login');

  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const token = localStorage.getItem("usertoken")
    const myemail = localStorage.getItem("email")
    console.log(token)
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const update = localStorage.getItem("update")
    const myId = localStorage.getItem("id")
    if (update == 'benar' && myId !== null) {
      localStorage.removeItem('update')
      axios
        .put(`http://localhost:8000/engineer/${myemail}`, {
          id: this.state.id,
          name: this.state.name,
          description: this.state.description,
          skill: this.state.skill,
          location: this.state.location,
          birth: this.state.birth,
          showcase: this.state.showcase,
          email: myemail
        }, config)
        .then(response => {

          // localStorage.setItem('usertoken', response.data.token)
          // console.log(response.data)
          console.log(response.data, 'wwwwwwwwwwwwwwwwwwwwwwwwwwww')
          this.props.history.push(`/all`)


        })
        .catch(err => {
          console.log(localStorage.getItem("usertoken"))
          console.log(err)
        })

    } else {
      axios
        .post('http://localhost:8000/engineer', {
          id: this.state.id,
          name: this.state.name,
          description: this.state.description,
          skill: this.state.skill,
          location: this.state.location,
          birth: this.state.birth,
          showcase: this.state.showcase,
          email: myemail
        }, config)
        .then(response => {

          // localStorage.setItem('usertoken', response.data.token)
          // console.log(response.data)
          console.log(response.data, 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
          this.props.history.push(`/all`)


        })
        .catch(err => {
          console.log(localStorage.getItem("usertoken"))
          console.log(err)
        })

    }

  }

  render() {
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
            <NavDropdown.Item >XX</NavDropdown.Item>
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
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Fill The Data</h1>
              <div className="form-group">
                <label htmlFor="id">Id</label>
                <input
                  type="text"
                  className="form-control"
                  name="id"
                  placeholder="Enter id"
                  value={this.state.id}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  placeholder="Enter description"
                  value={this.state.description}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="skill">Skill</label>
                <input
                  type="text"
                  className="form-control"
                  name="skill"
                  placeholder="Skill"
                  value={this.state.skill}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  placeholder="Enter location"
                  value={this.state.location}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="birth">Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  name="birth"
                  placeholder="birth"
                  value={this.state.birth}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="showcase">Showcase</label>
                <input
                  type="text"
                  className="form-control"
                  name="showcase"
                  placeholder="showcase"
                  value={this.state.showcase}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile

