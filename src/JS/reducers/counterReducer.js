import { DECREMENT_COUNTER, INCREMENT_COUNTER, RESET_COUNTER, ADD_VALUE, TOGGLE } from "../constants/ActionTypes";

const intialState = {
    counter: 0,
    show:false
}

export const counterReducer = (state = intialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { ...state, counter: state.counter + 1 }
        case DECREMENT_COUNTER:
            return { ...state, counter: state.counter - 1 }
        case RESET_COUNTER:
            return { ...state, counter: 0 }
        case ADD_VALUE:
            return { ...state, counter: state.counter+action.payload }
            case TOGGLE:
            return {...state,show:!state.show}
        default:
            return state
    }
}