import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import Error from './pages/Error'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/success' element={<Success />}/>
        <Route path='/*' element={<Error />}/>
        <Route path='/login' element={<Login />}  />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
