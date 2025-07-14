import React from 'react'
import Header from './template/Header'
import Main from './template/Main'
import Footer from './template/Footer'
import './app.css'

export const App = () => {
  return (
    
    <div className='body'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App