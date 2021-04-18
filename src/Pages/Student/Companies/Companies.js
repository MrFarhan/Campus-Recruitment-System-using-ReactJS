import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Cards } from '../../../Components/Card/Cards'

export const Companies = () => {
    let history = useHistory()

    React.useEffect(() => {
        if (state?.currentUser?.role !== "Student") {
            return history.push("/")
        }
    }, [])
    
    const state = useSelector(state => state)
    const allUsers = state?.allUsers
    let companies = []
    // eslint-disable-next-line
    Object.values(allUsers).map((item, index) => {
        if (item?.role === "Company") {
            companies.push(item)
        }
    })
    return (
        <div style={{ width: "100%", marginTop: "5em" }}>
            <h3 style={{ display: "flex", justifyContent: "center", marginBottom: "1.5em" }}>List of companies here</h3>
            <div style={{ width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "flex-start" }}>
                {companies.map((item, index) => {
                    return <Cards  title={item?.fullName} text={item?.profile} email={item?.email} />
                })}
            </div>
        </div>
    )
}
