import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// import "../App.css"
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import firebase from "firebase"
import { Loader } from '../../Components/Loader';
// import pic from "./Circle-icons-profile.svg"


export const Profile = (props) => {
    const state = useSelector(state => state)
    const currentUser = state?.currentUser
    const currentUserRole = currentUser["role"]
    const loading = state?.loading


    let history = useHistory()

    const UpdateFunc = (values) => {
        values.preventDefault()
        console.log("values are : ", values.target.value)
// let UID = firebase.auth().currentUser?.uid
// firebase.database().ref("Users/" + UID).update({
//     firstName: values.firstName,
        // }).then().catch((e) => console.log(e, "error"))
        // history.push("/")

    }


if (loading) <Loader />


return (<Form onSubmit={(e) => UpdateFunc(e)}>


    { Array.from(props["data"]).map((item, index) => {
        console.log("props are ", props["data"])
        if (item["type"] === "text") {
            return (
                <Form.Group>
                    <Form.Label className="labels" htmlFor={item["id"]}>{item["place holder"]}</Form.Label>
                    <Form.Control id={item["id"]} type="text" placeholder={item["place holder"]} />
                </Form.Group>)
        } else if (item["type"] === "email") {
            return (
                <Form.Group>
                    <Form.Label className="labels" htmlFor={item["id"]}>{item["place holder"]}</Form.Label>
                    <Form.Control id={item["id"]} type="email" placeholder={item["place holder"]} />
                </Form.Group>)
        } else if (item["type"] === "textarea") {
            return (
                <Form.Group>
                    <Form.Label className="labels" htmlFor={item["id"]}>{item["place holder"]}</Form.Label>
                    <Form.Control id={item["id"]} as="textarea" rows={3} placeholder={item["place holder"]} />
                </Form.Group>)
        }
    })}

    <Form.Group>
        <Form.Control type="text" placeholder={`Signed in as ${currentUserRole}`} disabled={true} />
    </Form.Group>
    <Button variant="primary" type="submit" > Update</Button>
</Form>
)
}
