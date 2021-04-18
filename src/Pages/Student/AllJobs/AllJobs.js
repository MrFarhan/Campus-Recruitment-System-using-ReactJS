import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Cards } from '../../../Components/Card/Cards'
import firebase from "firebase"
import { appliedJobsAction } from '../../../Redux/Actions'
import { Loader } from '../../../Components/Loader'
import { useHistory } from 'react-router'


export const AllJobs = () => {
    let history = useHistory()
    const state = useSelector(state => state)
    const allJobs = useSelector(state => state?.allJobs)
    const currentUserUid = state?.currentUser?.uid
    const [myJobs, setMyJobs] = useState([])
    const [isloading, setIsloading] = useState(false)
    let myJob = []
    let dispatch = useDispatch()

    useEffect(() => {
        if (state?.currentUser?.role !== "Student") {
            return history.push("/")
        }
    }, [])

    useEffect(() => {

        if (state && state.currentUser && state.currentUser.Applied_Jobs) {
            // setIsloading(true)
            // eslint-disable-next-line
            Object.keys(state.currentUser.Applied_Jobs).map((item, index) => {
                myJob.push(item)
                setMyJobs(myJob)
                setIsloading(false)

            })
        } else {
            allJobs && setMyJobs(Object.values(allJobs))
            setIsloading(false)

        }
        // eslint-disable-next-line
    }, [state.currentUser.Applied_Jobs])

    if (state.currentUser.Applied_Jobs && !myJobs) {
        setIsloading(true)
    }


    const Apply = (job) => {
        firebase.database().ref(`Users/${firebase.auth().currentUser?.uid}/Applied_Jobs/${job?.jobUUID}`).update({
            jobUUID: job?.jobUUID
        })
        firebase.database().ref(`Jobs/${job?.jobUUID}/AppliedStudents/`).push({
            currentUserUid
        })
        dispatch(appliedJobsAction(job?.jobUUID))
    }


    const filteredJobs = !!myJobs && !!allJobs && Object.values(allJobs).filter(job => Array.isArray(myJobs) && myJobs?.indexOf(String(job?.jobUUID)) === -1)

    if (state?.isLoading || isloading) {
        return <Loader />
    }
    return (
        <div style={{ width: "100%" }}>
            <h3 style={{ display: "flex", justifyContent: "flex-start", marginBottom: "1.5em" }}>All jobs here</h3>
            <div style={{ width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "flex-start" }} >

                {filteredJobs && filteredJobs?.map((item, index) => {
                    return <Cards title={item?.jobTitle} text={item?.jobDescription} key2="Minimum GPA Required : " value2={item?.min_gpa} key3="Tentative Salary : " value3={new Intl.NumberFormat('en-PK', { maximumSignificantDigits: 3 }).format(item?.salary)} linkText="Apply Now" clickHandler={() => Apply(item)} email={item?.email} key4="Posted By : " value4={item?.postedBy} footerKey="Last date to apply is" footerValue={item?.lastDateToApply} />
                })}

            </div>
        </div>
    )
}
