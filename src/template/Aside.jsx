import React from 'react'
const Aside = () => {
  return (
    <aside className="left">
        <div className="image">
          <img src="/img/nopal.jpg" alt="" />
        </div>
        <p>Web Developer</p>
        <h2>Hi, I'm Muhammad Naufal Saputra</h2>
        <div>
          <a className='cv' href="/Cv_Muhammad Naufal Saputra.pdf" download>Download My CV</a>
        </div>
        <div className="social-media">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/muhammad-naufal-saputra-b6a8902a8/"
                target="_blank"
                ><i className="fab fa-linkedin-in"></i></a>
            </li>
            <li>
              <a href="https://www.instagram.com/n0pal_06/" target="_blank"
                ><i className="fab fa-instagram"></i></a>
            </li>
            <li>
              <a href="https://wa.me/6281381653386" target="_blank"
                ><i className="fab fa-whatsapp"></i ></a>
            </li>
          </ul>
        </div>
    </aside>
  )
}

export default Aside