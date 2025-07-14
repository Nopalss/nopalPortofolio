import React from 'react'
import Aside from './Aside'
import { RiNextjsLine } from "react-icons/ri";
import { FaReact, FaVuejs } from "react-icons/fa";
import { SiGooglecloud, SiExpress, SiMongodb } from "react-icons/si";
import projects from '../assets/projects';
const Main = () => {
  return (
    <main>
      <Aside/>
      <div className="content">
        <article id="home" className="container-home">
          <h1 className="left">
            Say Hi from <span className="nama">Muhammad Naufal Saputra</span>,
            Web Developer
          </h1>
        </article>
        <article className="about right">
          <h1>About</h1>
          <p>
            Saya, Muhammad Naufal Saputra, adalah mahasiswa jurusan Sistem
            Informasi di Univeristas Bina Sarana Informatika. Saya seorang yang
            bersemangat dan berdedikasi tinggi dalam bidang pengembangan web.
            Dengan latar belakang pendidikan di bidang sistem informasi dan
            pengalaman dalam membuat berbagai jenis website, saya siap untuk
            menghadirkan solusi kreatif dan inovatif dalam pengembangan proyek
            web.
          </p>
          <section>
            <div className="kotak left">
              <i className="fas fa-graduation-cap"></i>
              <p>Bina Sarana Informatika</p>
            </div>
            <div className="kotak top">
              <i className="fas fa-map-marker-alt"></i>
              <p>Cikarang</p>
            </div>
            <div className="kotak right">
              <i className="fas fa-birthday-cake"></i>
              <p>06 Oktober 2004</p>
            </div>
          </section>
        </article>
        <article id="experience">
          <div className="title">
            <p>Explore My</p>
            <h1>Experience</h1>
          </div>
          <section className="experience">
            <div className="experience-content left">
              <h1>Frontend Development</h1>
              <div className="row">
                <div className="item">
                  <i className="far fa-check-circle"></i>
                  <div className="item-2">
                    <h2><i className="fab fa-html5"></i></h2>
                    <p>Advanced</p>
                  </div>
                </div>
                <div className="item">
                  <i className="far fa-check-circle"></i>
                  <div className="item-2">
                    <h2><i className="fab fa-css3"></i></h2>
                    <p>Advanced</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="item">
                  <i className="far fa-check-circle"></i>
                  <div className="item-2">
                    <h2><i className="fab fa-js-square"></i></h2>
                    <p>Elementary</p>
                  </div>
                </div>
                <div className="item">
                  <i className="far fa-check-circle"></i>
                  <div className="item-2">
                    <h2><i className="fab fa-bootstrap"></i></h2>
                    <p>Advanced</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="item">
                  <i className="far fa-check-circle"></i>
                  <div className="item-2">
                    <h2><i className="fab fa-php"></i></h2>
                    <p>Advanced</p>
                  </div>
                </div>
                <div className="item">
                  <i className="far fa-check-circle"></i>
                  <div className="item-2">
                    <h2><i className="fab fa-laravel"></i></h2>
                    <p>Advanced</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="item">
                  <i className="far fa-check-circle"></i>
                  <div className="item-2">
                    <h2><RiNextjsLine/></h2>
                    <p>Advanced</p>
                  </div>
                </div>
                <div className="item">
                  <i className="far fa-check-circle"></i>
                  <div className="item-2">
                    <h2><FaReact/></h2>
                    <p>Advanced</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="item">
                  <i className="far fa-check-circle"></i>
                  <div className="item-2">
                    <h2><FaVuejs/></h2>
                    <p>Advanced</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience-content right">
              <h1>Backend Development</h1>
              <div className="row">
                <div className="item">
                  <i className="far fa-check-circle"></i>
                  <div className="item-2">
                    <h2>Mysql</h2>
                    <p>Advanced</p>
                  </div>
                </div>
                <div className="item">
                  <i className="far fa-check-circle"></i>
                  <div className="item-2">
                    <h2>Git</h2>
                    <p>Internmediate</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="item">
                  <i className="far fa-check-circle"></i>
                  <div className="item-2">
                    <h2><SiGooglecloud /></h2>
                    <p>Advanced</p>
                  </div>
                </div>
                <div className="item">
                  <i className="far fa-check-circle"></i>
                  <div className="item-2">
                    <h2><SiExpress/></h2>
                    <p>Advanced</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="item">
                  <i className="far fa-check-circle"></i>
                  <div className="item-2">
                    <h2><SiMongodb /></h2>
                    <p>Advanced</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
        <article id="project">
          <div className="title">
            <p>Browse My Recent</p>
            <h1>Projects</h1>
          </div>
          <section className="column-project">
            {projects.sort((a,b)=> b.id - a.id).map((project) => (
            <a
              href={project.url}
              target="_blank"
              className="item-project top"
              key={project.id}
            >
              <div className="image-project">
                <img src={`/img/${project.img}`} alt={project.name} />
              </div>
              <h3>{project.name}</h3>
            </a>
            ))}
          </section>
        </article>
      </div>
    </main>
  )
}

export default Main