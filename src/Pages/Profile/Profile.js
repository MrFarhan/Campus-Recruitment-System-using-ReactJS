import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// import "../App.css"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import firebase from "firebase"
// import pic from "./Circle-icons-profile.svg"


export const Profile = (props) => {



    return (
        Array.from(props["data"]).map((item, index) => {
            if (item["type"] === "text") {
               return <input type="text" placeholder="text here" />
                // console.log("input type text")
            } else if (item["type"] === "email") {
                console.log("email input here")
            } else if (item["type"] === "textarea") {
                console.log("textarea input here")
            }
        })
    )
}
