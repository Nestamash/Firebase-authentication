import Login from './components/Login'
import SignUp from './components/SignUp'
import ForgotPassword from './components/ForgotPassword'
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/forgot-password' element={<ForgotPassword />} />
    <Route path='/dashboard' element= {<Dashboard />} />
   </Routes>
   </>
  )
}

export default App
