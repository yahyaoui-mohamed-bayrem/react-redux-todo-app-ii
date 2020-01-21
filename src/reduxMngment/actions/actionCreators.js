import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from './actionTypes.js'

export function addTODO (newTODO){
    return {
        type: ADD_TODO,
        payload: newTODO
    }
}

export function updateTODO (id, val){
    return {
        type: UPDATE_TODO,
        payloadId: id,
        payloadVal: val
    }
}

export function removeTODO (id){
    return {
        type: REMOVE_TODO,
        payload: id
    }
}