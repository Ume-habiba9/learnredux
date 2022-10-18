import React from 'react'
import { ADD, DEL } from './constant'

export function add  ()  {
    return( {
        type: ADD,
        payload: 50
    })
}
export function del ()  {
    return ({
        type: DEL,
        payload: 50
    })
}
