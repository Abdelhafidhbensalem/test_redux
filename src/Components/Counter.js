import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement,resetCounter} from "../JS/actions/actions"
const Counter = () => {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    return (
        <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <p>{counter}</p>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(resetCounter())}>reset</button>
        </div>
    )
}

export default Counter
