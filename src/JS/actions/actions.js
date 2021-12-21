import {INCREMENT_COUNTER,DECREMENT_COUNTER,RESET_COUNTER,ADD_VALUE,TOGGLE} from "../constants/ActionTypes"

export const increment=()=>{
    return {type:INCREMENT_COUNTER}
}

export const decrement=()=>{
    return {type:DECREMENT_COUNTER}
}

export const resetCounter=()=>{
    return {type:RESET_COUNTER}
}

export const addValue=(x=0)=>{
    return {type:ADD_VALUE,payload:x}
}

export const toggleInitial=()=>{
    return{type:TOGGLE}
}
