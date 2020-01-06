import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'

export default class Home extends Component {
    render(){
        return (
            <div class="row-right">
                <Form className="login-form">
                    <h2>Login</h2>
                    <br></br><br></br><br></br>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" placeholder="input email..."></Input>
                    <br></br>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" placeholder="input password..."></Input>
                </FormGroup>
                <div id="text" className="text-right">Forgot Password?</div>
                <br></br>
                <Link to="/login">
                    <Button id="login" className="btn-lg btn-block">
                        Login
                    </Button>
                </Link>
                
                <br></br><br></br>
                <Link to="/register">
                    <Button id="register" className="btn-lg btn-block">
                        Register
                    </Button>
                </Link>
                </Form>
            </div>

            
                
        )
    }
}