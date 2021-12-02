import React from 'react'
import { Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, fetchIncrementAmount } from './counterSlice'

export function Counter() {
  const count = useSelector(state => state.counter.value)
  const countLoading = useSelector(state => state.counter.loading)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <Button
          variant="contained"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          variant="contained"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          decrement
        </Button>
      </div>
      <div>
        <Button
          variant="contained"
          onClick={() => dispatch(fetchIncrementAmount(20))}
          disabled={countLoading === 'pending'}
        >
          +20 later
        </Button>
        <span>Loading: {countLoading}</span>
      </div>
    </div>
  )
}