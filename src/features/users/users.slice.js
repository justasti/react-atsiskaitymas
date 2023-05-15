import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const USERS_API_URL = 'http://localhost:3000/users'

const initialState = {
  loading: false,
  users: [],
  authUser: 'as',
  error: ''
}

const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  return axios.get(USERS_API_URL)
    .then(res => res.data)
})

const addUser = createAsyncThunk('users/addUser', async (user) => {
  const modifiedUser = {
    ...user,
    password: hashPassword(user.password),
    role: 'user',
    isRestricted: false
  }
  return axios.post(USERS_API_URL, modifiedUser)
    .then(res => res.data)
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.authUser = action.payload
    },
    logoutUser: (state) => {
      state.authUser = null
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      state.users = action.payload
      state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.users = []
      state.error = action.error.message
    })
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.users = state.users.push(action.payload)
      state.authUser = action.payload
    })
  }
})

export default usersSlice.reducer
export { fetchUsers, addUser }
export const { loginUser, logoutUser } = usersSlice.actions