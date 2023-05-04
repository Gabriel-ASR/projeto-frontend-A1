import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/index.jsx'
import About from './pages/About.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact.jsx'
import LogRegister from './pages/LogRegister.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<LogRegister/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
