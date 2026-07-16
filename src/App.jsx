import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  return (
    <>
      <ToastContainer />

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Home />}/>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
