import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
function App() {
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
