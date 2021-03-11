import React from 'react'
// import { useHistory } from 'react-router-dom'
import { Header } from './Header';
import { Body } from './Body';

export const CompanyDashboard = () => {
    // let history = useHistory()
    return (
        <div className="dashboard">
            <Header />
            <Body />
        </div>
    )
}
