import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyReservations from './pages/MyReservations'
import Layout from './components/Layout'

function App() {
  
  return (
    <>
      <BrowserRouter>     
        <ToastContainer />

        {/* ESTOS COMPONENTES VAN A TENER NAVBAR */}
        <Routes> 
          <Route element={<Layout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/my-reservations' element={<MyReservations />} />
        </Route>

          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
         
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
