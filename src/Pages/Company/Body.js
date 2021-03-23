import React from 'react'
import { useSelector } from 'react-redux';
import { Cards } from '../../Components/Cards';
import { MyModal } from './Vacancies/Modal';

export const Body = () => {
    const state = useSelector(state => state)
    const allJobs = state?.allJobs
    const currentUserUid = state?.currentUser?.uid

    // const result = allJobs && Array.isArray(allJobs) && allJobs?.filter(item => item?.uid === currentUserUid)


    console.log("current user uid ", currentUserUid)
    // console.log("result is ", result)

    const DeleteJob = () => {
        console.log("job delete clicked")
    }
    return (
        <div style={{ width: "100%" }}>
            <MyModal />
            <h3>Vacencies here</h3>
            <div style={{ width: "100%", display: "flex" }} >
                
                {Object.entries(allJobs).map((item, index) => {
                    
                    if (item[1].uid === currentUserUid) {
                        return <Cards title={item[1].jobTitle} text={item[1].jobDescription} key2="Minimum GPA Required" value2={item[1].min_gpa} key3="Tentative Salary" value3={item[1].salary} linkText="Delete" clickHandler={(item) => DeleteJob(item[1] && item[1].uid)} email={item[1].email} footerKey="Last date to apply is" footerValue={item[1].lastDateToApply} />
                    }
                })}
            </div>
        </div>

    )
}
