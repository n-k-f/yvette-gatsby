import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = () => (
  <header className='header'>
    <nav className="nav-primary">
      <Link className="nav-link nav-link--primary" to="/">Yvette</Link>
      <Link className="nav-link nav-link--primary" to="/">Shows</Link>
      <Link className="nav-link nav-link--primary" to="/">Audio</Link>
      <Link className="nav-link nav-link--primary" to="/">Info</Link>
    </nav>
    <nav className="nav-social">
      <a href="#" className="nav-link nav-link--social">Face</a>
      <a href="#" className="nav-link nav-link--social">Twt</a>
      <a href="#" className="nav-link nav-link--social">Inst</a>
      <a href="#" className="nav-link nav-link--social">Camp</a>
      <a href="#" className="nav-link nav-link--social">Cloud</a>
      <a href="#" className="nav-link nav-link--social">Spot</a>
    </nav>
  </header>
)

export default Header
