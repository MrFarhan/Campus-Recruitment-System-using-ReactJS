import React from 'react'
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { CgLogOut } from "react-icons/cg"
import { IoIosNotificationsOutline } from "react-icons/io"
import { useHistory } from 'react-router-dom'


export const Header = ({title, route}) => {
    let history = useHistory()
    const logout = () => {
        history.push("/")
    }
    return (
        <Navbar bg="light" expand="lg" fixed="top"  >
            <Navbar.Brand href="#home">Campus Recruitment System</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#Myposts">My Posts</Nav.Link>
                    <Nav.Link href="#AppliedCandidates">Applied Candidates</Nav.Link>
                    <Nav.Link href="#Profile">Profile</Nav.Link>
                </Nav>
                <Form inline>
                    <IoIosNotificationsOutline size="2em" /> &nbsp;
                    <Button variant="outline-dark" onClick={logout} className="logout"><CgLogOut />Logout</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>

    )
}
