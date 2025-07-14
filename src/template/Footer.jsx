import React from 'react'

const Footer = () => {
  return (
    <footer className="top">
      <h1>Muhammad Naufal Saputra</h1>
      <div className="row">
        <div className="item inst">
          <a href="https://www.instagram.com/n0pal_06/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="item link">
          <a
            href="https://www.linkedin.com/in/muhammad-naufal-saputra-b6a8902a8/"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="item wa">
          <a href="https://wa.me/6281381653386" target="_blank">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
        <div className="item ema">
          <a
            href="mailto:muhammadnaufalsaputra06@gmail.com?subject=Hello&body=How are you?"
            target="_blank"
          >
            <i className="far fa-envelope"></i>
          </a>
        </div>
        <div className="item git">
          <a href="https://github.com/Nopalss" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="copy">
        <h2>&copy;MuhammadNaufalSaputra</h2>
      </div>
    </footer>
  )
}

export default Footer