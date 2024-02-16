import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Programs from './pages/Programs'
import HealthyLiving from './pages/HealthyLiving'
import Community from './pages/Community'

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/programs' element={<Programs />} />
            <Route path='/healthy' element={<HealthyLiving />} />
            <Route path='/community' element={<Community />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
