import { CURRENT_USER ,IS_LOADING} from './ActionTypes'

export const initialState = {
    currentUser: {},
    isLoading: true
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
        default:
            return state
    }
}