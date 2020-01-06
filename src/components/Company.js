

import React, { Component } from 'react'
import axios from 'axios'

import { Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/Home.css'
import Pictarka from '../Images/logo.png';
import Avatar from '../Images/avatar.jpg';
import Bell from '../Images/bell.png';
import Chat from '../Images/chat.png';
import TextField from '@material-ui/core/TextField';
import { NativeSelect, InputLabel, FormControl, InputBase } from '@material-ui/core';


import Card from './Card';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Logo from './logo.png';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import SortIcon from '@material-ui/icons/Sort';
import Select from '@material-ui/core/Select';

import MenuItem from '@material-ui/core/MenuItem';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import NotificationsIcon from '@material-ui/icons/Notifications';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import SweetAlert from 'sweetalert-react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './styles/navbar.css';
import './styles/sweetalert.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getAllUser, pagination } from "../Redux/Actions/users";


class Company extends Component {
  constructor() {
    super();
    this.state = {
      sortby: '',
      search: '',
      limit: '',
      page: '',
      order: '',
      users: [],
      profileClicked: false,
      clickedName: '',
      errors: null
    }
  }

  sortOnchange = (e) => {
    this.setState({ sortby: e.target.value })

  }

  searchOnchange = (e) => {
    this.setState({ search: e.target.value })

  }

  limitOnchange = (e) => {
    this.setState({ limit: e.target.value })

  }
  orderOnchange = (e) => {
    this.setState({ order: e.target.value })

  }
  pageOnchange = (e) => {
    this.setState({ page: e.target.value })

  }
  logout = e => {
    localStorage.removeItem('usertoken')
    localStorage.removeItem('email')
    localStorage.removeItem('position')
    localStorage.removeItem('update')
    localStorage.removeItem('id')
    this.props.history.push('/login');

  }

  shouldComponentUpdate(a, b, c) {
    console.log('sdfdaf', a, b, c)
    return true
  }

  async componentDidUpdate(_, prevState) {
    // await this.props.dispatch(pagination());
    // const paginate = await this.props.paginate;
    // console.log(paginate, 'paginationku')

    if (this.state.search !== prevState.search || this.state.sortby !== prevState.sortby || this.state.limit !== prevState.limit || this.state.page !== prevState.page || this.state.order !== prevState.order) {
      console.log('beda')
      await this.props.dispatch(pagination(this.state.search, this.state.sortby, this.state.limit, this.state.page, this.state.order));
      const users = await this.props.paginate.result.data;
      this.setState({
        users,
      });
      // const token =  localStorage.getItem("usertoken")
      //  const email =  localStorage.getItem("email")
      //  console.log(email)
      //  const config={
      //      headers:{
      //          Authorization: `Bearer ${token}`
      //         }
      //     }

      // axios
      //    .get(`http://localhost:8000/sort?search=${this.state.search}&sortby=${this.state.sortby}&limit=${this.state.limit}&page=${this.state.page}&order=${this.state.order}`,  config)
      //   .then(response => {
      //     console.log('ooook')
      //     console.log(response)
      //       console.log('data', response)
      //       this.setState({
      //         users:   response.data.data,
      //       });
      //     })
      //   .catch(error => this.setState({ error }));
    } else { console.log('sama') }
  }


  async componentDidMount() {
    await this.props.dispatch(getAllUser());
    const users = await this.props.users;
    // console.log(users, 'users')
    this.setState({
      users: users.userData.data
    });

  };

  //cuma bisa dijalankan sekali
  // componentDidMount() {
  //      const token =  localStorage.getItem("usertoken")
  //      const email =  localStorage.getItem("email")
  //      console.log(email)
  //      const config={
  //          headers:{
  //              Authorization: `Bearer ${token}`
  //             }
  //         }

  //     axios
  //        .get(`http://localhost:8000/sort`,  config)
  //        //.get(`http://localhost:8000/sort?sortby=${this.state.sortby}`,  config)
  //       .then(response => {
  //         console.log('ooook')
  //         console.log(response)
  //         //console.log(response)
  //           console.log('data', response)
  //           this.setState({
  //             users:   response.data.data,
  //           });

  //            //console.log(this.state.sortby)
  //         })
  //       .catch(error => this.setState({ error }));
  //   }

  render() {
    const position =  localStorage.getItem("position")
    console.log(position,'ssssssss')
    const { users } = this.state
    console.log(users,'aaaaaaaaaaa')
    console.log(this.state.profileClicked,'ddddaaaaa')
    console.log(this.state.users,'bbbbbbbbbbbbbbbbbbbbbbbbbb')
    console.log(this.state.sortby)
    return (
      <React.Fragment>
        <Navbar className='navbar-style'>
          <Navbar.Brand>
            <img
              alt="Pictarka"
              src={Pictarka}
            />
          </Navbar.Brand>

          <input className='navbar-search' type="text" name="search" placeholder="Search.." value={this.state.search}
            onChange={this.searchOnchange}
          ></input>
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
        <FormControl margin="normal" className="inputsearch">
          <InputLabel htmlFor="demo-customized-select-native">Sort By</InputLabel>
          <NativeSelect
            value={this.state.sortby}
            onChange={this.sortOnchange}
            variant="outlined"
            id="demo-customized-select-native">
            <option value="name">Name</option>
            <option value="skill">Skill</option>
            <option value="updated">Date Updated</option>
          </NativeSelect>
        </FormControl>



        <FormControl margin="normal" className="inputsearch">
          <InputLabel htmlFor="demo-customized-select-native">Order</InputLabel>
          <NativeSelect
            value={this.state.order}
            onChange={this.orderOnchange}
            variant="outlined"
            id="demo-customized-select-native">
            <option value="ASC">ASC</option>
            <option value="DESC">DESC</option>
          </NativeSelect>
        </FormControl>
        <TextField
          id="filled-number"
          label="Limit"
          value={this.state.limit}
          onChange={this.limitOnchange}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Page"
          value={this.state.page}
          onChange={this.pageOnchange}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <button type="button" class="btn btn-primary btn-lg btn-block">Add Project</button>
        <>
          <SweetAlert
            show={this.state.profileClicked}
            title={this.state.clickedName}
            showCancelButton
            text={
              position == 'company'
                ? `Skill: ${this.state.clickedSkill} \n Showcase: ${this.state.clickedShowcase} \n Success rate: 50% \n\n See Detail?`
                : `Skill: ${this.state.clickedSkill} \n Showcase: ${this.state.clickedShowcase} \n Success rate: 50% \n\n XX`
            }
            onConfirm={event => {
              this.setState({ profileClicked: false });
              localStorage.setItem('emailEng', this.state.email)
               this.props.history.push('/eCard');

              // if (this.state.position == 'company') {
              //   this.handleClickOpenProfilePage();
              // }
              

            }}
            onOutsideClick={e => {
              this.setState({ profileClicked: false });
            }}
            onCancel={() => {
              this.setState({ profileClicked: false });
            }}
          />

          <Grid
            container
            direction='row'
            justify='space-evenly'
            alignItems='center'
            spacing={2}
            style={{ paddingTop: '1.5rem' }}
          >
          </Grid>
          <Grid
            container
            direction='row'
            justify='space-evenly'
            alignItems='center'
            spacing={3}
          >
            {users.map(user => {
              return (
                <Button
                  onClick={() => {
                    this.setState({
                      clickedId: user.id,
                      clickedName: user.name,
                      clickedSkill: user.skill,
                      clickedShowcase: user.showcase,
                      clickedSuccessrate: user.skill,
                      email:user.email,
                      profileClicked: true
                    });
                  }}
                >
                  <Card
                    key={user.id}
                    name={user.name}
                    skill={user.skill}
                    showcase={user.showcase || '-'}
                    email={user.email || 'wahyu@gmail.com'}
                    successrate={'50'}
                  />
                </Button>
              );
            })}

          </Grid>
          <Grid
            container
            direction='row'
            justify='space-evenly'
            alignItems='center'
            spacing={3}
            style={{ paddingTop: '1.5rem' }}
          >

          </Grid>
        </>

      </React.Fragment>
    );
  }
}
//export default Company
const mapStateToProps = state => {
  return {
    users: state.users,
    paginate: state.paginate
  };
};
export default connect(mapStateToProps)(Company);