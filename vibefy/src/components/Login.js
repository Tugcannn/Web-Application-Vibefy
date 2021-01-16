import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Login extends Component {
    constructor(props)
    {
        super(props)
        
        this.state = {
            username: '',
            password: ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
          e.preventDefault(
          console.log(this.state)
        )
    }

    render() {
        const{username, password} = this.state
        return (
            <div className="col-sm-12">
            <Form onSubmit = {this.submitHandler}>
                <Form.Group controlId="formBasicText">
                    <Form.Label><i>Username</i></Form.Label>
                    <Form.Control type="text" placeholder="Enter username" name = "username" value = {username} required minLength = "5" onChange = {this.changeHandler}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label><i>Password</i></Form.Label>
                    <Form.Control type="password" placeholder="Password" name = "password" value = {password}  required minLength = "8" onChange = {this.changeHandler}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    <i>Login</i>
                </Button>
            </Form>
            </div>
        );
    }
}

export default Login;