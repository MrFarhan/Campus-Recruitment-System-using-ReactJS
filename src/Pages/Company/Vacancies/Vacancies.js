import React from 'react'
import { useSelector } from 'react-redux';
import { Cards } from '../../../Components/Card/Cards';
import { ReadOnlyModal } from '../../../Components/Modal/ReadOnlyModal';
import firebase from "firebase"
import "./Vacancies.css"
import { useHistory } from 'react-router';

export const Vacancies = () => {

    React.useEffect(() => {
        if (state?.currentUser?.role !== "Company") {
            return history.push("/")
        }
    }, [])

    const state = useSelector(state => state)
    const allJobs = state?.allJobs
    const currentUserUid = state?.currentUser?.uid
    const allUsers = state?.allUsers
    const [showModal, setShowModal] = React.useState(false)
    const [appliedStudent, setAppliedStudent] = React.useState()
    const currentUser = state?.currentUser

    const DeleteJob = (e) => {
        let jobUUID = e?.jobUUID
        firebase.database().ref(`Jobs/${jobUUID}`).remove()
    }




    const StudentsDropDown = (e) => {
        return Object.entries(allUsers).forEach((item, index) => {
            if (item[0] === e) {
                setAppliedStudent(item[1])
                return setShowModal(true)
            }
        })

    }
    let history = useHistory()

    return (
        <div style={{ width: "100%", marginTop: "5em" }}>
            {!!showModal && <ReadOnlyModal data={appliedStudent} onHide={() => setShowModal(false)} ShowModal={showModal} />}
            <h3 className="vacanciesHeading" >VACANCIES HERE</h3>
            <div style={{ width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "flex-start" }} >

                {allJobs && Object.entries(allJobs).map((item, index) => {
                    if (item[1]?.uid === currentUserUid) {
                        let tempUser = []
                        item[1]?.AppliedStudents && Object.values(item[1]?.AppliedStudents).map((appliedItem, appliedIndex) => {
                            return Object.values(allUsers).map((userItem, userIndex) => {
                                if (userItem?.uid === appliedItem?.currentUserUid) {
                                    tempUser.push(userItem)
                                }
                            })
                        })
                        return <Cards title={item[1].jobTitle} text={item[1].jobDescription} key2="Minimum GPA Required" value2={item[1].min_gpa} key3="Tentative Salary" value3={new Intl.NumberFormat('en-PK', { maximumSignificantDigits: 3 }).format(item[1].salary)} linkText="Delete" clickHandler={() => DeleteJob(item[1])} email={item[1].email} footerKey="Last date to apply is" footerValue={item[1].lastDateToApply} dropDownValue={tempUser} dropDownClickHandler={(e) => StudentsDropDown(e)} />
                    }
                })}


            </div>
        </div>

    )
}
