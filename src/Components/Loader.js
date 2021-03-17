import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Loader = () => {
    return (
        <div style={{display:"flex",justifyContent:"center", alignItems:"center", width:"100vw", height:"100vh", size:"5em"}}>
            <Spinner animation="border" />
        </div>
    )
}
