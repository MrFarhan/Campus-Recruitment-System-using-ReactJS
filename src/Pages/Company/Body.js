import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { array } from 'yup';
import { Cards } from '../../Components/Cards';
import { MyModal } from './Vacancies/Modal';

export const Body = () => {
    const state = useSelector(state => state)
    const allJobs = state?.allJobs
    console.log("all jobs are", allJobs)
    return (
        <div>
            <MyModal />
            <h3>Vacencies here</h3>
            <div style={{display:"flex"}} >
                {Array.isArray(allJobs) && allJobs?.map((item, index) => {
                    return <Cards title={item?.jobTitle} text={item?.jobDescription} key2="Minimum GPA Required" value2={item?.min_gpa} key3="Tentative Salary" value3={item?.salary} linkText="Apply Now" email={item?.email} key4="Posted By : " value4={item?.postedBy} footerKey="Last date to apply is" footerValue={item?.lastDateToApply} />
                })}
            </div>
        </div>

    )
}
