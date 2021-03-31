import React from 'react'
// import { useHistory } from 'react-router-dom'
import { Header } from '../../Components/Header';
// import { Body } from './Body';

export const AdminDashboard = () => {
    // let history = useHistory()
    return (
        <div className="dashboard">
            <Header Data={[{ "Text": "Users", "route": "/admin-dashboard/users" }, { "Text": "Profile", "route": "/admin-dashboard/profile" }, { "Text": "Companies", "route": "/admin-dashboard/companies" }]} />
Admin Dashboard here        </div>
    )
}
