import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Cards } from '../../../Components/Cards'
import firebase from "firebase"


export const All_Jobs = () => {
    const state = useSelector(state => state)
    const allJobs = useSelector(state => state?.allJobs)
    const [DBLength, setDBLength] = useState(0)
    const [myJobs, setMyJobs] = useState()
    let myJob = []

    useEffect(() => {
        Object.values(state.currentUser.Applied_Jobs).map((item, index) => {
            console.log("Applied jobs", item.job.jobUUID)
            myJob.push(item?.job?.jobUUID)
            setMyJobs(myJob)
        })
    }, [])

    const Apply = (job) => {
        console.log("applied ", job?.jobUUID)
        firebase.database().ref(`Users/${firebase.auth().currentUser?.uid}/Applied_Jobs/${job?.jobUUID}`).update({
            job: job
        })

    }

    const filteredJobs = allJobs.filter(job => myJobs?.indexOf(job?.jobUUID) === -1)
    // console.log("filtered jobs in all jobs", filteredJobs)

    return (<>
        <h3>All jobs here</h3>
        <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }} >


            {/* {Array.isArray(allJobs) && allJobs?.map((item, index) => {
                return console.log("all jobs uid",item?.jobUUID)
            })} */}


            {filteredJobs?.map((item, index) => {
                return <Cards title={item?.jobTitle} text={item?.jobDescription} key2="Minimum GPA Required" value2={item?.min_gpa} key3="Tentative Salary" value3={item?.salary} linkText="Apply Now" clickHandler={() => Apply(item)} email={item?.email} key4="Posted By : " value4={item?.postedBy} footerKey="Last date to apply is" footerValue={item?.lastDateToApply} />
            })}
        </div>
    </>
    )
}
