import React from 'react'

const Header = () => {
 
  return (
    <header>
    <nav>
      <div className="desktop ">
        <ul>
          <li>
            <a href="#home"><i className="fas fa-home"></i></a>
          </li>
          <li>
            <a href="#experience"><i className="fas fa-tachometer-alt"></i></a>
          </li>
          <li>
            <a href="#project"><i className="fas fa-tasks"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  )
}

export default Header