import { CURRENT_USER } from './ActionTypes'

export const initialState = {
    currentUser: {}
}

export default function Reducer(state = initialState, { type, payload }) {
    switch (type) {
        case CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            return state
    }
}