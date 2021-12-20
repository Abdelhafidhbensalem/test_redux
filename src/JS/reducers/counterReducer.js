import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../constants/ActionTypes";

const intialState = {
    counter: 0

}

const counterReducer = (state = intialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { ...state, counter: state.counter + 1 }
        case DECREMENT_COUNTER:
            return { ...state, counter: state.counter - 1 }
        default:
            return state
    }
}