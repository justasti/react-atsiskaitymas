import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/users.slice'
import cardsReducer from '../features/cards/cards.slice'

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    users: usersReducer
  }
})

export default store