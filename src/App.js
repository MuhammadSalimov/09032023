import React from 'react'
import Home from './Components/Home'
import Cover from './pages/cover/Cover'
import Authors from './pages/Authors/Authors'
import { AppProvider } from './context'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

   
function App() {
  return <div className='container'>
    <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Cover />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </AppProvider>
  </div>

}

export default App
