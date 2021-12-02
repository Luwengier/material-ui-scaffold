import { configureStore } from '@reduxjs/toolkit'
import { pokemonApi } from '../slices/pokemonApiSlice'

import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
  // preloadedState: {
  //   counter: 0,
  // },
})

