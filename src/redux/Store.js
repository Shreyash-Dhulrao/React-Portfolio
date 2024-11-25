import { configureStore } from '@reduxjs/toolkit'
import ThemeReducer from './Theme'

export default configureStore({
  reducer: {
    Theme: ThemeReducer
  }
})