import React from 'react'
import { useSelector } from 'react-redux'
import { Profile } from './Profile';

export const MainProfile = () => {
    const state = useSelector(state => state)
    const currentUser = state?.currentUser

    const CompanyData = [{ "place holder": "Full Name", "type": "text", "id": "fullName" }, { "place holder": "Email", "type": "email" }, { "place holder": "Brief Profile", "type": "textarea" }];
    const StudentData = [{ "place holder": "Full Name", "type": "text", "id": "fullName" }, { "place holder": "Email", "type": "email" }, { "place holder": "Brief Profile", "type": "textarea" }];

    return (

        currentUser["role"] === "Company" ? <Profile data={CompanyData} /> : currentUser["role"] === "Student" ? <Profile data={StudentData} /> : alert("chal bhag BC login kar k aa")
    )

}
