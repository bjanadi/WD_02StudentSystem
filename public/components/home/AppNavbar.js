import React, { Component} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav,NavItem, Container} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class AppNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar color='dark' dark expand='sm' className='mb-5'>
                    <Container>
                        <NavbarBrand href='/'>STUDENT AND INSTRUCTOR SYSTEM</NavbarBrand>
                            <Nav className='ml-auto' navbar>
                                <NavItem>
                                    <NavLink to="/login">Login</NavLink>
                                </NavItem>
                            </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
export default AppNavbar;