import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Create from './pages/Create'
import BlogDetails from './pages/BlogDetails'

import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/blogs/:id' element={<BlogDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default App