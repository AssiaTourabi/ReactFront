import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style_menu.css';

const Header = () => {
    return (
        <Navbar className="header shadow-sm p-3">
            <Navbar.Brand className="d-flex align-items-center">
                <img
                    src="/path/to/your/logo.png"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Logo"
                />
            </Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/consulter-mon-compte"> <b> Assia TOURABI</b></Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Header;
