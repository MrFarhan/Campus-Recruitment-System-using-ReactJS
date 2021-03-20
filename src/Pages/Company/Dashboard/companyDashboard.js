import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { Body } from './Body';
import firebase from "firebase"
import { currentUserAction, isLoadingAction } from '../../../Redux/Actions';
import { Loader } from '../../../Components/Loader';
import { useHistory } from 'react-router';

export const CompanyDashboard = () => {
    const state = useSelector(state => state)
    const currentUser = state?.currentUser
    const loading = state.isLoading
    let history = useHistory()
    // const currentUser = state?.currentUser
    // console.log("current User is ", state)
    let dispatch = useDispatch()
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const useruid = user.uid
                firebase.database().ref(`Users/${useruid}/`).on("value", (res) => {
                    dispatch(currentUserAction(res.val()))
                    dispatch(isLoadingAction(false))
                })
            }
            else dispatch(isLoadingAction(false))

        });
        // eslint-disable-next-line
    }, [])

    if (loading) <Loader />
    // console.log("")
    // if (!loading && !currentUser?.uid) history.push('/')

    return (<>
        <div className="dashboard" style={{ backgroundColor: "red" }}>
            company dashboard here
        </div>
        {/* <Body /> */}
    </>
    )
}
