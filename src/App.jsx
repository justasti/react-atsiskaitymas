import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './features/homepage/home.page'
import LoginPage from './features/users/login-form/login.page'
import SignupPage from './features/users/signup-form/signup.page'
import { useSelector } from 'react-redux'
function App() {
  const { authUser } = useSelector((state) => state.users)
  return (
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
  )
}

export default App
