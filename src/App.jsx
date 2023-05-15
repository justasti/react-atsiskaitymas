import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './features/homepage/home.page'
import LoginPage from './features/users/login-form/login.page'
import SignupPage from './features/users/signup-form/signup.page'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchCards } from './features/cards/cards.slice'
import { fetchUsers } from './features/users/users.slice'
import Header from './features/header/header.component'
function App() {
  const dispatch = useDispatch()
  const { authUser } = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(fetchCards())
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route
          index
          element={authUser ? <Homepage /> : <Navigate to='login' />}
        />
        <Route
          path='add'
          element={authUser ? <Homepage /> : <Navigate to='login' />}
        />
        <Route path='login' element={<LoginPage />} />
        <Route path='signup' element={<SignupPage />} />
      </Routes>
    </>
  )
}

export default App
