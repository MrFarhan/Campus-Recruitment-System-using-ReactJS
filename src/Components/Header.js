import React, { useEffect } from 'react'
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { CgLogOut } from "react-icons/cg"
import { IoIosNotificationsOutline } from "react-icons/io"
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";
import firebase from "firebase"
import { useDispatch } from 'react-redux';
import { currentUserAction, isLoadingAction } from '../Redux/Actions';
import "./Header.css"


export const Header = (props) => {
    let [path, setPath] = React.useState(window.location.pathname.toLowerCase())
    let history = useHistory()
    let dispatch = useDispatch()
    const logout = () => {
        firebase.auth().signOut()
        dispatch(currentUserAction(false))
        dispatch(isLoadingAction(false))
        history.push("/")
    }
    // React.useEffect(() => {
    //     console.log("path name is ", history.location.pathname)

    // }, [history.location.pathname])
    return (
        <div >
            <Navbar bg="light" expand="lg" fixed="top"  >
                <Navbar.Brand ><h4 className="Headerheading">Campus Recruitment System</h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {props?.Data?.map((item, index) => {

                            return <Link key={index} to={item["route"]} onClick={()=>setPath(item?.route)}>
                                &nbsp; {String(window.location.pathname) == String(item["route"]) ? <span style={{ color: "red", textDecoration: "none !important" }}>{item["Text"]}</span> : <span style={{ color: "black", textDecoration: "none" }}> {item["Text"]} </span>} &nbsp;
                                    </Link>
                        })}
                    </Nav>
                    <Form inline>
                        <IoIosNotificationsOutline size="2em" /> &nbsp;
                    <Button variant="outline-dark" onClick={logout} className="logout"><CgLogOut />Logout</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div >
    )
}
