import React, { useEffect } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./Login.css"
import usePasswordToggler from './useHooks';
import firebase from "firebase"
import { currentUserAction, isLoadingAction } from '../../Redux/Actions';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../Components/Loader';
import logo from "./campus_logo.png"


export const Login = () => {
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                firebase.database().ref(`Users/${firebase.auth().currentUser?.uid}/`).on("value", (res) => {
                    if (res.val()?.role === "Student") {
                        dispatch(currentUserAction(res.val()))
                        dispatch(isLoadingAction(false))
                        history.push("/companies")
                    } else if (res.val()?.role === "Company") {
                        dispatch(currentUserAction(res.val()))
                        dispatch(isLoadingAction(false))
                        history.push("/vacancies")
                    }
                })
            } else {
                dispatch(isLoadingAction(false))
            }
        });
        // eslint-disable-next-line
    }, [])
    let history = useHistory()
    let dispatch = useDispatch()
    const [Icon, inputType] = usePasswordToggler()
    const state = useSelector(state => state)
    const loading = state?.isLoading
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(5, 'Password must be 5 or more then 5 characters Long ')
                .max(15, 'Must be 15 characters or less')
                .required('Required')
        }),
        onSubmit: values => {
            let email = (values.email);
            let pass = (values.password);
            LoginFunc(email, pass)

        },
    });


    const LoginFunc = (email, pass) => {
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(() => {
                firebase.database().ref(`Users/${firebase.auth().currentUser?.uid}/`).on("value", (res) => {
                    dispatch(currentUserAction(res.val()))
                    dispatch(isLoadingAction(false))
                    history.push("/")

                })
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // [START_EXCLUDE] 
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                // [END_EXCLUDE]
            });

    }

    const SignupFunc = () => {
        history.push("/signup")
    }

    if (loading) <Loader />


    return (
        <div className="loginMain">
            <Form onSubmit={formik.handleSubmit} className="LoginForm" >
                <img src={logo} className="compLogo" alt="Logo" />
                <Form.Group >
                    <Form.Label className="labels" htmlFor="email">Email</Form.Label>
                    <Form.Control id="email" type="email" placeholder="Enter email" {...formik.getFieldProps('email')} autoFocus />
                    <span className="inputerror">  {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}</span>
                </Form.Group>



                <Form.Group >
                    <Form.Label className="labels">Password</Form.Label>
                    <InputGroup.Prepend>
                        <Form.Control id="password" type={inputType} placeholder="Password" {...formik.getFieldProps('password')} />
                        <InputGroup.Text id="inputGroupPrepend" style={{ marginLeft: "-2.5em" }}>{Icon}</InputGroup.Text>
                    </InputGroup.Prepend>
                    <span className="inputerror">{formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}</span>
                </Form.Group>
                <Form.Group style={{ display: "flex" }}>
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit" >  Login</Button>
                <Button variant="link" onClick={SignupFunc}>Don't have an account ?</Button>
            </Form>
        </div>
    )
}
