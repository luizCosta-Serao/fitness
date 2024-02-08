import React from 'react'
import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <div className='container'>
          <Header />
          <Routes>

          </Routes>
        </div>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
