import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Cards } from '../../../Components/Cards'

export const Companies = () => {

    const state = useSelector(state => state)
    const allUsers = state?.allUsers
    // let [companies, setCompanies] = useState([])
    let companies = []
    console.log("companies comp", allUsers)

    // allUsers && Array.from(state?.allUsers).map((item, index) => {
    //     return console.log("item is ", item)
    // })
    Object.values(allUsers).map((item, index) => {
        if (item?.role === "Company") {
            companies.push(item)
        }
        // console.log("item is ", item?.role)
    })
    console.log("companes are ", companies)
    return (<>
        <h3>List of companies here</h3>
        <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
            {companies.map((item, index) => {
                return <Cards title={item?.fullName} text={item?.profile} email={item?.email} />
            })}
        </div>
    </>
    )
}
