import React, { Component } from 'react'
import axios from 'axios'
import { Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/Home.css'
import Pictarka from '../Images/arka.png';
import Avatar from '../Images/avatar.jpg';
import Bell from '../Images/bell.png';
import Chat from '../Images/chat.png';

class Project extends Component {
  constructor() {
    super()
    this.state = {
      id_project: '',
      project_name:'',
      description: '',
      email_com: '',
      status: '' || 'pending',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  logout = e => {
    localStorage.removeItem('usertoken')
    localStorage.removeItem('email')
    localStorage.removeItem('position')
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
      axios
        .post('http://localhost:8000/companyproject', {
          id_project: this.state.id_project,
          project_name: this.state.project_name,
          description: this.state.description,
          status: this.state.status,
          email_com: myemail
        }, config)
        .then(response => {
          console.log(response.data, '7777777')
        })
        .catch(err => {
          console.log(err)
        })
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
              <h1 className="h3 mb-3 font-weight-normal">Add Project</h1>
              <div className="form-group">
                <label htmlFor="id_project">Id Project</label>
                <input
                  type="text"
                  className="form-control"
                  name="id_project"
                  placeholder="Enter id project"
                  value={this.state.id_project}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="project_name">Project Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="project_name"
                  placeholder="Project Name"
                  value={this.state.project_name}
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
                <label htmlFor="email_com">Email company</label>
                <input
                  type="text"
                  className="form-control"
                  name="email_com"
                  placeholder="Emailmuu"
                  value={this.state.email_com}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="status">Status</label>
                <input
                  type="text"
                  className="form-control"
                  name="status"
                  placeholder="status"
                  value={this.state.status}
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

export default Project

