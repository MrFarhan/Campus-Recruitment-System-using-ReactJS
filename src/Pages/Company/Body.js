import React from 'react'
import { useSelector } from 'react-redux';
import { Cards } from '../../Components/Cards';
import { ReadOnlyModal } from '../../Components/ReadOnlyModal';
import { MyModal } from './Vacancies/Modal';
import firebase from "firebase"

export const Body = () => {

    const state = useSelector(state => state)
    const allJobs = state?.allJobs
    const currentUserUid = state?.currentUser?.uid
    const allUsers = state?.allUsers
    const [showModal, setShowModal] = React.useState(false)
    const [appliedStudent,setAppliedStudent] = React.useState()
    
    const DeleteJob = (e) => {
        let jobUUID = e?.jobUUID
        console.log("job delete clicked",e?.jobUUID)
        firebase.database().ref(`Jobs/${jobUUID}`).remove()
    }




    const StudentsDropDown = (e) => {
        return Object.entries(allUsers).map((item, index) => {
            if (item[0] === e) {
                setAppliedStudent(item[1])
                return setShowModal(true)
            }
        })

    }


    return (
        <div style={{ width: "100%" }}>
            {!!showModal && <ReadOnlyModal data={appliedStudent} onHide={()=>setShowModal(false)} ShowModal={showModal} />}
            <MyModal />
            <h3>Vacencies here</h3>
            <div style={{ width: "100%", display: "flex" }} >


                {Object.entries(allJobs).map((item, index) => {

                    if (item[1].uid === currentUserUid) {
                        let tempUser = []
                        Object.values(item[1].AppliedStudents).map((appliedItem, appliedIndex) => {
                            return Object.values(allUsers).forEach((userItem, userIndex) => {
                                if (userItem?.uid === appliedItem?.currentUserUid) {
                                    tempUser.push(userItem)
                                }
                            })
                        })
                        return <Cards title={item[1].jobTitle} text={item[1].jobDescription} key2="Minimum GPA Required" value2={item[1].min_gpa} key3="Tentative Salary" value3={item[1].salary} linkText="Delete" clickHandler={() => DeleteJob(item[1])} email={item[1].email} footerKey="Last date to apply is" footerValue={item[1].lastDateToApply} dropDownValue={tempUser} dropDownClickHandler={(e) => StudentsDropDown(e)} />
                    }
                })}


            </div>
        </div>

    )
}
