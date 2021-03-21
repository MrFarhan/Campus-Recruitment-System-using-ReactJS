import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Cards } from '../../../Components/Cards'
import firebase from "firebase"


export const AppliedJobs = () => {
    const [myJobs, setMyJobs] = useState()
    const state = useSelector(state => state)
    let myJob = []
    const allJobs = useSelector(state => state?.allJobs)

    useEffect(() => {
        Object.values(state.currentUser.Applied_Jobs).map((item, index) => {
            console.log("Applied jobs", item.job.jobUUID)
            myJob.push(item?.job?.jobUUID)
            setMyJobs(myJob)
        })
    }, [])


    {
        Array.isArray(allJobs) && allJobs?.map((item, index) => {
            return console.log("all jobs uid", item?.jobUUID)
        })
    }


    const filteredJobs = allJobs.filter(job => myJobs?.indexOf(job?.jobUUID) !== -1)


    const Apply = (job) => {
        console.log("applied ", job?.jobUUID)
        firebase.database().ref(`Users/${firebase.auth().currentUser?.uid}/Applied_Jobs/${job?.jobUUID}`).update({
            job: job
        })

    }

    return (
        <>
            <h3>Applied Jobs here</h3>
            <div style={{ width: "100%", display: "flex" }}>
                {
                    filteredJobs?.map((item, index) => {
                        return <Cards title={item?.jobTitle} text={item?.jobDescription} key2="Minimum GPA Required" value2={item?.min_gpa} key3="Tentative Salary" value3={item?.salary}   email={item?.email} key4="Posted By : " value4={item?.postedBy} footerKey="Last date to apply is" footerValue={item?.lastDateToApply} />
                    })
                }
            </div>
        </>)
}
