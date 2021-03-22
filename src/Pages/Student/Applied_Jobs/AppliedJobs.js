import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Cards } from '../../../Components/Cards'
// eslint-disable-next-line
import firebase from "firebase"


export const AppliedJobs = () => {
    const [myJobs, setMyJobs] = useState()
    const state = useSelector(state => state)
    let myJob = []
    const allJobs = useSelector(state => state?.allJobs)
    // eslint-disable-next-line
    useEffect(() => {
        // eslint-disable-next-line
        state && state.currentUser && state.currentUser.Applied_Jobs && Object.values(state.currentUser.Applied_Jobs).map((item, index) => {
            myJob.push(item?.job?.jobUUID)
            setMyJobs(myJob)
        })
        // eslint-disable-next-line
    }, [])


    // {
    //     Array.isArray(allJobs) && allJobs?.map((item, index) => {
    //         return console.log("all jobs uid", item?.jobUUID)
    //     })
    // }


    const filteredJobs = myJobs ? allJobs.filter(job => myJobs?.indexOf(job?.jobUUID) !== -1) : null


    return (
        <>
            <h3>Applied Jobs here</h3>
            <div style={{ width: "100%", display: "flex" }}>
                {
                    filteredJobs?.map((item, index) => {
                        return <Cards title={item?.jobTitle} text={item?.jobDescription} key2="Minimum GPA Required" value2={item?.min_gpa} key3="Tentative Salary" value3={item?.salary} email={item?.email} key4="Posted By : " value4={item?.postedBy} footerKey="Last date to apply is" footerValue={item?.lastDateToApply} />
                    })
                }
            </div>
        </>)
}
