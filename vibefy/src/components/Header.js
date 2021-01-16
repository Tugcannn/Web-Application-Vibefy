import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/home">VIBEFY</Navbar.Brand>
            <Nav className="mr-auto"></Nav>
            <Nav className="ms-auto">
                <NavDropdown title="Moods" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/happy">I am pretty very happpyyy!</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/sad">Naa, I am so sad actually :/</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/angry">I am angry, just play music</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Header;