import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Login() {

    return (
        <div className="col-sm-12">
            <Form>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" name="login-username"/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
            </Button>
            </Form>
        </div>
    );
}

export default Login;