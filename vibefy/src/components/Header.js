import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/home"><i>VIBEFY</i></Navbar.Brand>
            <Nav className="mr-auto"></Nav>
            <Nav className="ms-auto">
                <NavDropdown title="Moods" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/happy"><i>Happy</i></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/sad"><i>Sad</i></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/angry"><i>Energetic</i></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/angry"><i>Angry</i></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/home"><i>Home</i></Nav.Link>
                <Nav.Link href="/login"><i>Login</i></Nav.Link>
                <Nav.Link href="/register"><i>Register</i></Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Header;