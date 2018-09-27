import React from 'react'
import Link from 'gatsby-link'
import './footer.css'

const Footer = () => (
  <footer className='footer'>
    <ul className="footerList">
        <li>
        <span>© YVETTE 2018</span>
        </li>
        <li><a href="mailto:yvetteyvetteyvetteyvette@gmail.com?Subject=Via%20your%20site:%20hello%20there" className="footer-link">Contact</a></li>
        <li><a href="http://www.twitter.com/___yvette___" target="blank" className="footer-link">Twitter</a></li>
        <li><a href="http://www.instagram.com/___yvette___" target="blank" className="footer-link">Instagram</a></li>
        <li><a href="http://www.facebook.com/yvettemusic" target="blank" className="footer-link">Facebook</a></li>
    </ul>
    <nav className="nav-footer">
      <Link className="footer-link" to="/">Shows</Link>
      <Link className="footer-link" to="/">Audio</Link>
      <Link className="footer-link" to="/">Info</Link>
    </nav>
  </footer>
)

export default Footer
