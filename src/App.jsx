import React, { useEffect } from 'react'
import Header from './template/Header'
import Main from './template/Main'
import Footer from './template/Footer'
import './App.css'
import ScrollReveal from "scrollreveal";

export const App = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "40px",
      duration: 2050,
      delay: 200,
      reset: false,
    });
    sr.reveal(".bottom", { origin: "bottom" });
    sr.reveal(".top", { origin: "top" });
    sr.reveal(".left", { origin: "left" });
    sr.reveal(".right", { origin: "right" });
  });
  return (
    
    <div className='body'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App