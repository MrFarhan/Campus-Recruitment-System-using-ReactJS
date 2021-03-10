import React from 'react'
import { useHistory } from 'react-router-dom'
import { CgLogOut } from "react-icons/cg"
import { Button } from 'react-bootstrap';
import { useSelector } from "react-redux"

export const Dashboard = () => {
    let history = useHistory()
    const logout = () => {
        history.push("/")
    }
    const state = useSelector(state => state)
    return (
        <div className="dashboard">
            Dashboard {state?.name}

            <Button variant="outline-dark" onClick={logout} className="logout"><CgLogOut />Logout</Button>
        </div>
    )
}
