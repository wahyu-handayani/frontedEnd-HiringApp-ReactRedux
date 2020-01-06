// import React, { Component } from 'react'
import axios from 'axios'


class All extends Component {
    state = {
        users: [],
      errors: null
    };


    componentDidMount() {
         const token =  localStorage.getItem("usertoken")
         console.log(token)
         const config={
             headers:{
                 Authorization: `Bearer ${token}`
                }
            }
        axios
          .get("http://localhost:8000/engineer/0",config)
          .then(response => {
              console.log('data', response)
              this.setState({
                users:   response.data.response
              });
            })
          .catch(error => this.setState({ error }));
      }
  
    render() {
      console.log(this.state.users[0])
      const { users } = this.state
      return (
        <React.Fragment>
          <div className="col">
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
                </li>
              </ul>
            </div>
            )}
          </div>

        </React.Fragment>
      );
    }
  }
export default All