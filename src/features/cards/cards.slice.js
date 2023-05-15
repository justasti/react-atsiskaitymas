import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const CARDS_API_URL = 'http://localhost:3000/data'

const initialState = {
  loading: false,
  cards: [],
  error: ''
}

const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  return axios.get(CARDS_API_URL)
    .then(res => res.data)
})

const addCard = createAsyncThunk('cards/addCard', async (card) => {
  return axios.post(CARDS_API_URL, card)
    .then(res => res.data)
})

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchCards.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.loading = false
      state.cards = action.payload
      state.error = ''
    })
    builder.addCase(fetchCards.rejected, (state, action) => {
      state.loading = false
      state.cards = []
      state.error = action.error.message
    })
    builder.addCase(addCard.fulfilled, (state, action) => {
      state.cards = state.cards.push(action.payload)
    })
  }
})

export default cardsSlice.reducer
export { fetchCards, addCard }