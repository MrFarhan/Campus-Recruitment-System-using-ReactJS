import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import firebase from "firebase"
import { Loader } from '../../Components/Loader';
import { currentUserAction, isLoadingAction } from '../../Redux/Actions';


export const Profile = (props) => {

    const state = useSelector(state => state)
    const currentUser = state?.currentUser
    const currentUserRole = currentUser && currentUser["role"]
    const loading = state?.isLoading
    let dispatch = useDispatch()
    console.log("current user in profile is ", currentUser)
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const useruid = user?.uid
                firebase.database().ref(`Users/${useruid}/`).on("value", (res) => {
                    dispatch(currentUserAction(res.val()))
                    dispatch(isLoadingAction(false))

                })
            } else {
                dispatch(isLoadingAction(false))
                history.push("/")

            }
        });
    }, [])
    console.log("Loading in profile is ", loading)

    let history = useHistory()

    if (loading) <Loader />
    // if (!loading && !currentUser) history.push("/")

    return (<Form onSubmit={(e) => e.preventDefault()}>

        {/* {console.log("props . data is ", props.data?.fields)} */}
        { Array.from(props?.data?.fields).map((item, index) => {
            console.log("props are ", props["data"])
            if (item?.type === "text") {
                return (
                    <Form.Group>
                        <Form.Label className="labels" htmlFor={item?.id}>{item?.placeholder}</Form.Label>
                        <Form.Control id={item?.id} type={item?.type} placeholder={item?.placeholder} value={item?.value} disabled={true} />
                    </Form.Group>)
            } else if (item?.type === "email") {
                return (
                    <Form.Group>
                        <Form.Label className="labels" htmlFor={item?.id}>{item?.placeholder}</Form.Label>
                        <Form.Control id={item?.id} type="email" placeholder={item?.placeholder} value={item?.value} disabled={true} />
                    </Form.Group>)
            } else if (item?.type === "textarea") {
                return (
                    <Form.Group>
                        <Form.Label className="labels" htmlFor={item?.id}>{item?.placeholder}</Form.Label>
                        <Form.Control id={item?.id} as="textarea" rows={3} placeholder={item?.placeholder} value={item?.value} onChange={(e) => item?.changeHandler(e)} />
                    </Form.Group>)
            }
        })}

        <Form.Group>
            <Form.Control type="text" placeholder={`Signed in as ${currentUserRole}`} disabled={true} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={props?.data?.onsubmit} > Update</Button>
    </Form>
    )
}
