import React from 'react'
import { useSelector } from 'react-redux';
import { Header } from '../../Components/Header';

export const CompanyDashboard = () => {
    // const state = useSelector(state => state)
    // const currentUser = state?.currentUser
    // console.log("current User is ", state)
    return (<>
        <div className="dashboard">
            <Header Data={[{ "Text": " My Vacancies ", "route": "/comp-dashboard/vacancies" }, { "Text": " Applied Candidates ", "route": "/comp-dashboard/applied_job" }, { "Text": " Profile ", "route": "/comp-dashboard/profile" }]} />
        </div></>
    )
}
