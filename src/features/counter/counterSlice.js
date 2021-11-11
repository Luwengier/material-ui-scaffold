import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// replace import counterAPI in API file
const counterAPI = {
  fetchIncrementAmount: (amount) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({ data: amount }), 2000);
    })
  }
}

export const fetchIncrementAmount = createAsyncThunk('counter/fetchIncrementAmount', async (incrementAmount, thunkAPI) => {
  const response = await counterAPI.fetchIncrementAmount(incrementAmount)
  return response.data
})

const initialState = {
  value: 0,
  loading: 'idle',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: {
    [fetchIncrementAmount.pending]: (state, action) => {
      state.loading = 'pending'
    },
    [fetchIncrementAmount.fulfilled]: (state, action) => {
      state.value += action.payload
      state.loading = 'idle'
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 500)
}

export const selectCount = state => state.counter.value

export default counterSlice.reducer