import React from 'react'
import { Header } from '../../Components/Header';

export const CompanyDashboard = () => {
    return (
        <div className="dashboard">
            <Header Data={[{"Text":"My Vacancies", "route":"/vacancies"},{"Text":"Applied Candidates", "route":"comp-dashboard/applied_job"},{"Text":"Profile", "route":"comp-dashboard/profile"} ]}/>
        </div>
    )
}
