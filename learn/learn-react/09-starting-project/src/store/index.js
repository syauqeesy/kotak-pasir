import { configureStore } from '@reduxjs/toolkit'

import counterSlice from './counterSlice'
import authenticationSlice from './authenticationSlice'

export const counterActions = counterSlice.actions
export const authenticationActions = authenticationSlice.actions

export default configureStore({
  reducer: {
    counter: counterSlice.reducer,
    authentication: authenticationSlice.reducer
  }
})
