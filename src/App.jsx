import React from 'react'

import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom'
import Cart from './Component/Cart'
import Footer from './Component/Footer'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
const App = () => {
  return (
  //  <div  className='flex justify-center'>
<Router>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>

  </Routes>
  <Footer/>
</Router>
// </div>
  )
}

export default App