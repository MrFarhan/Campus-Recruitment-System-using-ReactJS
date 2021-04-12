import React from 'react'
import { useSelector } from 'react-redux'
import { Cards } from '../../../Components/Cards'

export const Companies = () => {

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
            <div style={{ width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                {companies.map((item, index) => {
                    return <Cards  title={item?.fullName} text={item?.profile} email={item?.email} />
                })}
            </div>
        </div>
    )
}
