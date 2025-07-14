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
    sr.reveal(".bottom", { origin: "top" });
    sr.reveal(".top", { origin: "top" });
    sr.reveal(".left", { origin: "top" });
    sr.reveal(".right", { origin: "top" });
  });
  return (
    <>
    <div className='body'>
      <Header/>
      <Main/>
    </div>
      <Footer/>
    </>
  )
}

export default App