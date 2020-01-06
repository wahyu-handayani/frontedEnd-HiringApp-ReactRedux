import React, { Component } from 'react'
//import { register } from './UserFunctions'
import { connect } from "react-redux";
import { register } from "../Redux/Actions/users";
//*import {getPlatPromo} from '../Redux2/Actions/promo'

import pictarka from '../Images/ark-white1.png';
import pictcenter from '../Images/imageleftlogin.png';
import Grid from '@material-ui/core/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Register.css';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      position:'',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {  
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state, 'state')
  }
  onSubmit = async (e)=>{
    e.preventDefault()

    const newUser = {
      email: this.state.email,
      password: this.state.password,
      position: this.state.position
    }

    // register(newUser).then(res => {
    //   this.props.history.push(`/login`)
    //  })
    //*this.props.dispatch(getPlatPromo())
    console.log(await this.props.admin, 'admin')
    await this.props.dispatch(register(newUser))
    .then( result => {
      console.log(result, 'rsssj')
      const success = result.value.data.response
      if (success === "Registered") {
        console.log('sukses')
        this.props.history.push(`/login`)
      }else console.log('gagal')
    } )
    .catch(err =>{
      console.log('err', err)
    })

  }

  render() {
    return (
      <Grid container>
      <Grid item xs={12} sm={7}>
          <div className= 'left'>
              <img className='pictarka' src={pictarka} alt='pictarka'/>
              <img className='pictcenter' src={pictcenter} alt='pictcenter'/>
              <div className="description">
                  <p className="description-header">
                  Hire expert freelancers for any job, online
                  </p>
                  <p className="description-footer">
                      Million of small businesses use Freelencer to turn their ideas into reality
                  </p>
              </div>
          </div>
      </Grid>
      


      <Grid item xs={12} sm={5}>
          <div className='right'>
              <p className='textlogin'>
                  Register
              </p>
              
              <form noValidate onSubmit={this.onSubmit}>
               <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
               <div className="form-group">
                 <label htmlFor="email">Email address</label>
                 <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Position</label>
                <input
                  type="position"
                  className="form-control"
                  name="position"
                  placeholder="Position"
                  value={this.state.position}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register
              </button>
            </form>


              </div>
          </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    admin: state.regis,
    //*promo: state.promo,
  };
};
export default connect(mapStateToProps)(Register);
