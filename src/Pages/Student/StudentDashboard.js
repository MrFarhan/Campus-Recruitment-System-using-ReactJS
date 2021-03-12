import React from 'react'
// import { useHistory } from 'react-router-dom'
import { Header } from '../../Components/Header';
import { Body } from './Body';

export const StudentDashboard = () => {
    // let history = useHistory()
    return (
        <div className="dashboard">
            <Header Data={[{ "Text": "Applied Jobs", "route": "/stddashboard/applied_jobs" }, { "Text": "Profile", "route": "Profile" }]} />
            <Body />
        </div>
    )
}
