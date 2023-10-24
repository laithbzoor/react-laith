import React from 'react'

export default function Navbar() {
  return (
    <>
  <nav className="navbar navbar-expand-lg fixed-top bg-danger p-0 pt-4" style={{transition: '0.5s'}}>
    <div className="container">
      <a className="navbar-brand" href="#">navbar</a>
      <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav m-auto mb-1 pt-2">
          <li className="nav-item me-3">
            <a className="nav-link active text-white" aria-current="page" href="/index.html">Home</a>
          </li>
          <li className="nav-item me-3">
            <div className="dropdown">
              <a className="btn  nav-link bg-transparent border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/gallery.html">Gallery</a></li>
              </ul>
            </div>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link" href="/index.html#about">About</a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link" href="/index.html#rooms">Rooms</a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link" href="/index.html#blogs">Blogs</a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link" href="/index.html#contact">Contact</a>
          </li>
        </ul>
      </div>
      <a href="#" className="mignfy"><i className="search fa-solid fa-magnifying-glass p-4 text-white" /></a>
      <a className="Book-button text-white" href="#">BOOK YOUR STAY<span style={{top: 100, left: 0}} /></a>
    </div>
  </nav>
</>

  )
}
