import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoginForm from './pages/LoginForm'
import Privacy from './pages/Privacy'
import Signup from './pages/Signup'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/login' element={<LoginForm /> } />
        <Route path='/privacy' element={<Privacy /> } />
        <Route path='/signup' element={<Signup /> } />
        <Route path='/contact' element={<Contact /> } />
       </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App