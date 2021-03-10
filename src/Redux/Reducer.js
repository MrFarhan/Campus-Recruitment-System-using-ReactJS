import { NAME , EMAIL} from './ActionTypes'

export const initialState = {
    name:"",
    email:"",
}

export default function Reducer(state = initialState, { type, payload }) {
    switch (type) {
        case NAME:
            console.log(payload)
            return {
                ...state,
                name: payload
            }
        case EMAIL:
            return {
                ...state,
                email: payload
            }
        default:
            return state
    }
}