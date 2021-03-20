import { ALL_USERS, CURRENT_USER, IS_LOADING, ALL_JOBS } from "./ActionTypes"

export const currentUserAction = (payload) => ({
    type: CURRENT_USER,
    payload
})

export const isLoadingAction = (payload) => ({
    type: IS_LOADING,
    payload
})

export const allUsersAction = (payload) => ({
    type: ALL_USERS,
    payload
})

export const allJobsAction = (payload) => ({
    type: ALL_JOBS,
    payload
})