import React from 'react'
import { ADD , DEL } from './constant'


 const updatebalance = (state = 200, action) => {

    switch (action.type) {
        case ADD:
            return state + action.payload
        case DEL:
            return state - action.payload

        default:
            return state;
    }
}
export default updatebalance;