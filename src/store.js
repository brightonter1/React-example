import { configureStore } from '@reduxjs/toolkit'

import membersReducer from './features/memberSlice'

export default configureStore({
  reducer: {
    members: membersReducer,
  },
})