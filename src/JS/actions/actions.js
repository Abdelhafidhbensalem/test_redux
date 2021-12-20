import {INCREMENT_COUNTER,DECREMENT_COUNTER} from "../constants/ActionTypes"

const increment=()=>{
    return {type:INCREMENT_COUNTER}
}

const decrement=()=>{
    return {type:DECREMENT_COUNTER}
}

