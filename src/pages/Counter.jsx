import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import counterAction from '../config/redux/actions/counterAction';

const Counter = () => {
    const {count} = useSelector((state)=>state.counter);
    const dispatch = useDispatch();
    
    const handleIncrement = () => {
        dispatch(counterAction())
    }
    const handleDecrement = () => {
        dispatch({type:'DECREMENT'})
    }

    return (
    <div>
        Hello World
        <p>{count}</p>
        <button className='btn border' onClick={handleIncrement}>+</button>
        <button className='btn border' onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Counter