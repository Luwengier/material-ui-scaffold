import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, fetchIncrementAmount } from './counterSlice'

export function Counter() {
  const count = useSelector(state => state.counter.value)
  const countLoading = useSelector(state => state.counter.loading)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          decrement
        </button>
      </div>
      <div>
        <button
          onClick={() => dispatch(fetchIncrementAmount(20))}
        >
          +20 later
        </button>
        <span>Loading: {countLoading}</span>
      </div>
    </div>
  )
}