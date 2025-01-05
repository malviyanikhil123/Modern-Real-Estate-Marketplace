import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import SignOut from './Pages/SignOut'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<SignOut />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </div>
  )
}

export default App
