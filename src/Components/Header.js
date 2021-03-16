import React from 'react'
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { CgLogOut } from "react-icons/cg"
import { IoIosNotificationsOutline } from "react-icons/io"
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";
import firebase from "firebase"
import { useDispatch } from 'react-redux';
import { currentUserAction } from '../Redux/Actions';


export const Header = (props) => {
    let history = useHistory()
    let dispatch = useDispatch()
    const logout = () => {
        firebase.auth().signOut()
        history.push("/")
        dispatch(currentUserAction(false))
    }

    // const Home = () => {
    //     history.push("/")

    // }

    return (
        <div >
            <Navbar bg="light" expand="lg" fixed="top"  >
                <Navbar.Brand >Campus Recruitment System</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {props?.Data?.map((item, index) => {
                            return <Link key={index} to={item["route"]} style={{ textDecoration: "none", color: "black" }}> &nbsp; {item["Text"]} &nbsp; </Link>
                        })}
                    </Nav>
                    <Form inline>
                        <IoIosNotificationsOutline size="2em" /> &nbsp;
                    <Button variant="outline-dark" onClick={logout} className="logout"><CgLogOut />Logout</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
