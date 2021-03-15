import { CURRENT_USER } from "./ActionTypes"

export const currentUserAction = (payload) => ({ 
    type: CURRENT_USER,
    payload
})