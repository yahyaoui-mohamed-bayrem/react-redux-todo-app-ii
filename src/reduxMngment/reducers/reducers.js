import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../actions/actionTypes.js'
let initState=[]
const toDoReducer = (state =initState, action) => {
    switch (action.type){
        case ADD_TODO :
            return state.concat({newTODO:action.payload,todoID:Date.now()});
        case UPDATE_TODO :
            // let arr= [...state];
            state.map(e=>e.todoID==action.payloadId?e.newTODO=action.payloadVal:e)
            return state;
        case REMOVE_TODO : 
            return state.filter((e,i)=> e.todoID!==action.payload)
        default: return state;
    }
}

export default toDoReducer;