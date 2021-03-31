import React, { useEffect } from 'react'
import firebase from "firebase"
import { currentUserAction, isLoadingAction } from '../../../Redux/Actions';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../../Components/Loader';
export const StudentDashboard = () => {
    const state = useSelector(state => state)
    const loading = state.isLoading
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
            else dispatch(isLoadingAction(true))

        });
        // eslint-disable-next-line
    }, [])
    // if (!currentUser || !!currentUser) history.push('/')

    if (loading) <Loader />

    return (
        <div className="dashboard">
            <h3>Student Dashboard Here</h3>
        </div>
    )
}
