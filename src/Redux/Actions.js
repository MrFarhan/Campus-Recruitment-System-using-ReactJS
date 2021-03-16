import { CURRENT_USER, IS_LOADING } from "./ActionTypes"

export const currentUserAction = (payload) => ({ 
    type: CURRENT_USER,
    payload
})

export const isLoadingAction = (payload) => ({ 
    type: IS_LOADING,
    payload
})
