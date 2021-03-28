import React from 'react'
import { useSelector } from 'react-redux';
import { Cards } from '../../Components/Cards';
import { MyModal } from './Vacancies/Modal';

export const Body = () => {
    const state = useSelector(state => state)
    const allJobs = state?.allJobs
    const currentUserUid = state?.currentUser?.uid
    const allUsers = state?.allUsers
    // const result = allJobs && Array.isArray(allJobs) && allJobs?.filter(item => item?.uid === currentUserUid)
    // console.log("current user uid ", currentUserUid)
    // console.log("result is ", result)
    // console.log("applied candidates are : ")
    // console.log("all jobs are ", allJobs)
    // Object.values(allUsers).map((item, index) => {
    //     console.log("item is ", item.uid)
    // })


    // {
    //     Object.entries(allJobs).map((item, index) => {
    //         item[1].AppliedStudents && Object.values(item[1].AppliedStudents).map((item1, index) => {
    //             Object.values(allUsers).map((userItem, index) => {
    //                 // console.log("item is ", userItem.uid)
    //                 if (item1?.currentUserUid === userItem.uid) {
    //                     console.log("item 1 is ", item1)
    //                 }
    //             })
    //             return ""
    //         })
    //     })
    // }
    // let temp =[]

    const DeleteJob = () => {
        console.log("job delete clicked")
    }
    return (
        <div style={{ width: "100%" }}>
            <MyModal />
            <h3>Vacencies here</h3>
            <div style={{ width: "100%", display: "flex" }} >


                {/* {Object.values(allUsers).map((item, index) => {
                    if (item.Applied_Jobs) {
                        console.log("this user", item, "has applied for :", Object.keys(item.Applied_Jobs))
                    }
                })} */}

                {/* {Object.values(allUsers).map((userItem, index) => {
                    console.log("user item is ", userItem)
                    Object.values(allJobs).map((allJobItem, index) => {
                        allJobItem.AppliedStudents && Object.values(allJobItem.AppliedStudents).map((item2, index2) => {
                        //    temp.push(item2)
                            console.log("item 2 is ",item2.currentUserUid)
                        })

                    })
                })} */}

                {/* {
                    Object.entries(allJobs).map((item, index) => {
                        item[1].AppliedStudents && Object.values(item[1].AppliedStudents).map((item1, index) => {
                            Object.values(allUsers).map((userItem, index) => {
                                // console.log("item is ", userItem.uid)
                                if (item1?.currentUserUid === userItem.uid) {
                                    let temp = []
                                    temp.push(item[1])
                                    console.log("this user ", userItem?.fullName, "has applied for ,", temp)
                                }

                            })
                            return ""
                        })
                    })
                } */}

                {Object.entries(allJobs).map((item, index) => {

                    if (item[1].uid === currentUserUid) {
                        // console.log("all jobs posted by current company ", item[1])
                        return Object.values(item[1].AppliedStudents).map((appliedItem, appliedIndex) => {
                            // console.log("This uid ", appliedItem?.currentUserUid, "has applied for ", item[1].jobUUID)
                            let tempJob = []
                            let tempUser = []
                            tempJob.push(item[1])
                            return Object.values(allUsers).map((userItem, userIndex) => {
                                if (userItem?.uid === appliedItem?.currentUserUid) {
                                    tempUser.push(appliedItem)
                                    console.log("tempJob is ", tempJob, "tempUser is ", tempUser)
                                    // console.log("this person", userItem?.fullName, "has applied for", item[1])
                                    return <Cards title={item[1].jobTitle} text={item[1].jobDescription} key2="Minimum GPA Required" value2={item[1].min_gpa} key3="Tentative Salary" value3={item[1].salary} linkText="Delete" clickHandler={(item) => DeleteJob(item[1] && item[1].uid)} email={item[1].email} footerKey="Last date to apply is" footerValue={item[1].lastDateToApply} dropDownValue={userItem?.fullName} />
                                }
                            })

                        })
                        // return <Cards title={item[1].jobTitle} text={item[1].jobDescription} key2="Minimum GPA Required" value2={item[1].min_gpa} key3="Tentative Salary" value3={item[1].salary} linkText="Delete" clickHandler={(item) => DeleteJob(item[1] && item[1].uid)} email={item[1].email} footerKey="Last date to apply is" footerValue={item[1].lastDateToApply} dropDownValue={userItem?.fullName} />
                    }
                })}
            </div>
        </div>

    )
}
