import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Profile } from './Profile';
import firebase from "firebase"
import { useHistory } from 'react-router';

export const MainProfile = () => {
    let history = useHistory()
    const state = useSelector(state => state)
    const currentUser = state?.currentUser
    const [profile, setProfile] = useState(currentUser?.profile || "")

    const Submit = () => {
        let UID = firebase.auth().currentUser?.uid
        firebase.database().ref("Users/" + UID).update({
            profile: profile,
        }).then("successfully updated profile").catch((e) => console.log("error while updating profile is : ", e))
        return history.push("/")

    }

    const CompanyData = { fields: [{ "placeholder": "Full Name", "type": "text", "id": "fullName", "value": `${currentUser?.fullName}` }, { placeholder: "Email", type: "email", value: `${currentUser?.email}` }, { placeholder: "Brief Profile", type: "textarea", value: `${profile}`, changeHandler: onchange = (e) => setProfile(e.target.value) }], onsubmit: (e) => Submit(e) };
    const StudentData = { fields: [{ "placeholder": "Full Name", "type": "text", "id": "fullName", "value": `${currentUser?.fullName}` }, { placeholder: "Email", type: "email", value: `${currentUser?.email}` }, { placeholder: "Brief Profile", type: "textarea", value: `${profile}`, changeHandler: onchange = (e) => setProfile(e.target.value) }], onsubmit: (e) => Submit(e) };

    return (!currentUser || currentUser && currentUser["role"] === "Company" ? <Profile data={CompanyData} /> : currentUser["role"] === "Student" ? <Profile data={StudentData} /> : alert("chal bhag BC login kar k aa"))
}
