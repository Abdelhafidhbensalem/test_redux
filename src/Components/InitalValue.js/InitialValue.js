import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addValue } from '../../JS/actions/actions'

const InitialValue = () => {
    const dispatch = useDispatch()
    const [initialValue, setInitialValue] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addValue(initialValue))
        setInitialValue(0)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" value={initialValue} onChange={(e) => setInitialValue(+e.target.value)} />
            </form>
        </div>
    )
}

export default InitialValue
