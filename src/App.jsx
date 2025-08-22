import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Product from './pages/Product'
import { Routes, Route } from 'react-router-dom'

const App = () =>
{
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen text-7xl">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
