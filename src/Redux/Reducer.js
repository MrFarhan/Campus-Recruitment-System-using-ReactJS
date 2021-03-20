import { ALL_USERS, CURRENT_USER, IS_LOADING, ALL_JOBS } from './ActionTypes'

export const initialState = {
    currentUser: {},
    isLoading: true,
    allUsers: {},
    allJobs: []
}

export default function Reducer(state = initialState, { type, payload }) {
    switch (type) {
        case CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        case IS_LOADING:
            return {
                ...state,
                isLoading: payload
            }
        case ALL_USERS:
            return {
                ...state,
                allUsers: payload
            }
        case ALL_JOBS:
            return {
                ...state,
                allJobs: payload
            }
        default:
            return state
    }
}