import React from 'react'
import { useSelector } from 'react-redux'
import { Profile } from './Profile';

export const MainProfile = () => {
    console.log("main profile ")
    
    const state = useSelector(state => state)
    const currentUser = state?.currentUser

    const CompanyData = [{ "placeholder": "Full Name", "type": "text", "id": "fullName" }, { "placeholder": "Email", "type": "email" }, { "placeholder": "Brief Profile", "type": "textarea" }];
    const StudentData = [{ "placeholder": "Full Name", "type": "text", "id": "fullName" }, { "placeholder": "Email", "type": "email" }, { "placeholder": "Brief Profile", "type": "textarea" }];

    return (!currentUser || currentUser && currentUser["role"] === "Company" ? <Profile data={CompanyData} /> : currentUser["role"] === "Student" ? <Profile data={StudentData} /> : alert("chal bhag BC login kar k aa"))

}
