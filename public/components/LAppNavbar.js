import React, { Component} from 'react';
import { Navbar, NavbarBrand, Nav,NavItem, Container} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class LAppNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar color='dark' dark expand='sm' className='mb-5'>
                    <Container>
                        <NavbarBrand href='/'>STUDENT AND INSTRUCTOR SYSTEM</NavbarBrand>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                Welcome !
                            </NavItem>
                        </Nav>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <NavLink to="/" exact>Logout</NavLink>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
export default LAppNavbar;