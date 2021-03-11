import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar  className="p-3 navbar" expand="lg">
          <Navbar.Brand  as={Link} to="/">English Premier League</Navbar.Brand>
        </Navbar>
    );
};

export default NavBar;