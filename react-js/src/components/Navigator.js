import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from "react-router-bootstrap";
//import {Link} from "react-router-dom";

export default class Navigator extends React.Component {
    state = {
        active: 1
    };

    handleSelect = (k) => {
        this.setState({active: k});
        console.log(k, this.state.active);
    }

    render() {
        return (
            <Navbar style={{zIndex: 10}} bg="light" expand="lg">
                <Navbar.Brand>Animatrix</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-center" onSelect={k => this.handleSelect(k)}>
                        <Nav.Item>
                            <LinkContainer exact to="/">
                                <Nav.Link>
                                    Home 
                                </Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/upload/">
                                <Nav.Link>
                                    Upload
                                </Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/projects/">
                                <Nav.Link title="Projects">
                                    Projects
                                </Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}