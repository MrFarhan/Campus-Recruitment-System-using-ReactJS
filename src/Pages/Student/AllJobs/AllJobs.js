import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Cards } from '../../../Components/Cards'
import firebase from "firebase"
import { appliedJobsAction } from '../../../Redux/Actions'


export const AllJobs = () => {
    const state = useSelector(state => state)
    const allJobs = useSelector(state => state?.allJobs)
    const appliedJobs = useSelector(state => state?.appliedJobs)
    const currentUserUid = state?.currentUser?.uid



    const [myJobs, setMyJobs] = useState()

    let myJob = []
    let dispatch = useDispatch()
    useEffect(() => {
        if (state && state.currentUser && state.currentUser.Applied_Jobs) {
            // eslint-disable-next-line
            Object.keys(state.currentUser.Applied_Jobs).map((item, index) => {
                myJob.push(item)
                setMyJobs(myJob)
            })
        } else setMyJobs(allJobs)
        // eslint-disable-next-line
    }, [state?.currentUser?.Applied_Jobs])


    // if (state && state.currentUser && state.currentUser.Applied_Jobs) {
    //     // eslint-disable-next-line
    //     Object.keys(state.currentUser.Applied_Jobs).map((item, index) => {
    //         myJob.push(item)
    //         setMyJobs(myJob)
    //     })
    // } 
    const Apply = (job) => {
        firebase.database().ref(`Users/${firebase.auth().currentUser?.uid}/Applied_Jobs/${job?.jobUUID}`).update({
            jobUUID: job?.jobUUID
        })
        firebase.database().ref(`Jobs/${job?.jobUUID}/AppliedStudents/`).push({
            currentUserUid
        })

        dispatch(appliedJobsAction(job?.jobUUID))
    }

    { console.log("all jobs rendering") }
    const filteredJobs = Object.values(allJobs).filter(job => myJobs?.indexOf(String(job?.jobUUID)) === -1)
    console.log("myJobs are ", myJobs, "all Jobs are", allJobs)

    return (
        <>
            <h3>All jobs here</h3>
            <div style={{ display: "flex" }} >

                {filteredJobs && filteredJobs?.map((item, index) => {
                    return <Cards title={item?.jobTitle} text={item?.jobDescription} key2="Minimum GPA Required" value2={item?.min_gpa} key3="Tentative Salary" value3={item?.salary} linkText="Apply Now" clickHandler={() => Apply(item)} email={item?.email} key4="Posted By : " value4={item?.postedBy} footerKey="Last date to apply is" footerValue={item?.lastDateToApply} />
                })}

            </div>
        </>
    )
}
