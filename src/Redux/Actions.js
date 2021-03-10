import { NAME, EMAIL } from "./ActionTypes"

export const nameAction = (payload) => ({
    type: NAME,
    payload
})

export const emailAction = (payload) => ({
    type: EMAIL,
    payload
})