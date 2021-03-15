import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// import "../App.css"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import firebase from "firebase"
import { Profile } from './Profile';
// import pic from "./Circle-icons-profile.svg"
// import Layout from './Layout';
// import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles((theme) => ({

//     signupFormMain: {
//         width: "100%",
//         justifyContent: "center",
//         [theme.breakpoints.up('xl')]: {
//             width: `70%`,
//             display: "flex",
//             justifyContent: "center",
//             marginTop: "5em"

//         },

//     },
//     signupForm: {
//         width: `70%`,
//         justifyContent: "center",
//         [theme.breakpoints.up('xl')]: {
//             width: `70%`
//         },

//     },
//     toolbar: theme.mixins.toolbar,
// }));

export const MainProfile = () => {
    const state = useSelector(state => state)
    const currentUser = state?.currentUser

    const CompanyData = [{ "place holder": "Full Name", "type": "text", "id":"fullName" }, { "place holder": "Brief Profile", "type": "textarea" }, { "place holder": "Email", "type": "email" }];
    const StudentData = [{ "text": "Full Name", "type": "input" }, { "text": "Brief Profile", "type": "text area" }, { "text": "Email", "type": "input" }];

    return (

        currentUser["role"] === "Company" ? <Profile data={CompanyData} /> : <Profile data={StudentData} />
    )

}
