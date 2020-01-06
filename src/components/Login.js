import React, { Component } from 'react'
//import { login } from './UserFunctions'

// import {Form} from 'react-bootstrap';
import pictarka from '../Images/ark-white1.png';
import pictcenter from '../Images/imageleftlogin.png';
import Grid from '@material-ui/core/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Login.css';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'

import { connect } from "react-redux";
import { login } from "../Redux/Actions/users";



class Login extends Component {
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
  }
  onSubmit=async (e) => {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password,
      position: this.state.position
    }
    console.log('oook')
    console.log(this.state.position)
    if(this.state.position==='company'){
      await this.props.dispatch(login(user))
      .then(result=>{
        console.log(result,'hasil')
        const data=JSON.parse(result.action.payload.config.data)
        localStorage.setItem('usertoken',result.value.data.token)
        localStorage.setItem('email',data.email)
        localStorage.setItem('position',data.position)
        this.props.history.push(`/company`)
      }).catch(err=>{
        console.log(err)
      })
    }else{
      await this.props.dispatch(login(user))
      .then(result=>{
        console.log(result,'hasil')
        const data=JSON.parse(result.action.payload.config.data)
        localStorage.setItem('usertoken',result.value.data.token)
        localStorage.setItem('email',data.email)
        localStorage.setItem('position',data.position)
        this.props.history.push(`/all`)
      }).catch(err=>{
        console.log(err)
      })
    }
  }

  render() {
    return (
      // <div className="container">
      //   <div className="row">
      //     <div className="col-md-6 mt-5 mx-auto">
      //       <form noValidate onSubmit={this.onSubmit}>
      //         <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      //         <div className="form-group">
      //           <label htmlFor="email">Email address</label>
      //           <input
      //             type="email"
      //             className="form-control"
      //             name="email"
      //             placeholder="Enter email"
      //             value={this.state.email}
      //             onChange={this.onChange}
      //           />
      //         </div>
      //         <div className="form-group">
      //           <label htmlFor="password">Password</label>
      //           <input
      //             type="password"
      //             className="form-control"
      //             name="password"
      //             placeholder="Password"
      //             value={this.state.password}
      //             onChange={this.onChange}
      //           />
      //         </div>
      //         <button
      //           type="submit"
      //           className="btn btn-lg btn-primary btn-block"
      //         >
      //           Sign in
      //         </button>
      //       </form>
      //     </div>
      //   </div>
      // </div>
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
                  LOGIN
              </p>
              
              <form noValidate onSubmit={this.onSubmit}>
               <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
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
                Login
              </button>

              <br></br><br></br>
              <Link to="/register">
                    <Button id="register" className="btn-lg btn-block">
                        Register
                    </Button>
                </Link>
            </form>


              </div>
          </Grid>
          </Grid>


    )
  }
}

const mapStateToProps = state => {
  return {
    admin: state.login,
    //*promo: state.promo,
  };
};
export default connect(mapStateToProps)(Login);
