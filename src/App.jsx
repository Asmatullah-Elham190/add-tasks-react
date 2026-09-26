import { useState } from 'react'
import { Routes ,Route,Navigate } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { Products } from './components/Products'
import { ProductList } from './components/ProductList'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Contect } from './components/Contect'
import { Admin } from './components/Admin'
import { NotFound } from './components/NotFound'

function App() {


  const user = true

  return (
    <>
     
      <Header />
      <dev className='main'>
<Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/product' element={<Products /> } />
        <Route path='/product-list /:id' element={<ProductList /> } />
          <Route path='/contact' element={<Contect />} />
          <Route path='*' element={<NotFound />} />

        <Route path='/admin'  element={ user ? <Admin /> : <Navigate to='/' /> } />
          
      </Routes>
      </dev>
      

      <Footer />
      
    </>
  )
}

export default App
