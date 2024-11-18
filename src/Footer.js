import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
      <span className="title-text">Recruit Card</span>
      <hr/>
      <div className='footer-1'>
      <ul>
        <li> <button className="activeButton">English</button></li>
        <li><button>Arabic</button></li>
        <li> <button>French</button></li>
      </ul>
      <span>Non Copyrighted &copy;2024 Upload by Mercid Technology</span> 
      </div>    
    </div>
  )
}
