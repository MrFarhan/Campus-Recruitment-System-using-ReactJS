import React, { useEffect } from 'react'
// import { useHistory } from 'react-router-dom'
import { Header } from '../../../Components/Header';
// import { Body } from './Body';
import firebase from "firebase"
import { currentUserAction, isLoadingAction } from '../../../Redux/Actions';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../../Components/Loader';
import { useHistory } from 'react-router';
export const StudentDashboard = () => {
    const state = useSelector(state => state)
    const currentUser = state?.currentUser
    const loading = state.isLoading
    let dispatch = useDispatch()
    let history = useHistory()

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
    // if (!currentUser || !!currentUser) history.push('/')

    if (loading) <Loader />

    return (
        <div className="dashboard">
           student dashboard here
            {/* <Body /> */}
        </div>
    )
}
