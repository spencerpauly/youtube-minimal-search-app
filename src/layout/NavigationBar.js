import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./NavigationBar.css"
import {Image} from 'cloudinary-react';

export class NavigationBar extends Component {

    render() {
        return (
            <Navbar className="navbar" collapseOnSelect expand="lg" bg="black" variant="dark">
                <Navbar.Brand href="/">
                    <Image className="navbarLogo d-inline-block align-top" cloudName="spencerpauly" publicId="projects/logo-secondary_mbjinr.png" width="100" crop="scale"/>
                    {' '}
                </Navbar.Brand>                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        {this.props.children}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavigationBar
