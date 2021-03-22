import React from 'react'
import { useSelector } from 'react-redux';
import { Cards } from '../../Components/Cards';
import { MyModal } from './Vacancies/Modal';

export const Body = () => {
    const state = useSelector(state => state)
    const allJobs = state?.allJobs
    const currentUserUid = state?.currentUser?.uid

    const result = Array.isArray(allJobs) && allJobs?.filter(item => item?.uid === currentUserUid)
    console.log("all jobs are ", allJobs)
    console.log("current user uid ", currentUserUid)
    console.log("result is ", result)
    return (
        <div>
            <MyModal />
            <h3>Vacencies here</h3>
            <div style={{ display: "flex" }} >
                {
                    result?.map((item, index) => {
                        return <Cards title={item?.jobTitle} text={item?.jobDescription} key2="Minimum GPA Required" value2={item?.min_gpa} key3="Tentative Salary" value3={item?.salary} linkText="Apply Now" email={item?.email} key4="Posted By : " value4={item?.postedBy} footerKey="Last date to apply is" footerValue={item?.lastDateToApply} />
                    })
                }

            </div>
        </div>

    )
}
