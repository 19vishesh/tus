import React from 'react'
import './navbar.css'

const Navbar = () => {

  return (
      <div className='navbar'>
          <div className="navbar__left">
              <img src="https://cdn.sriggle.tech/kantents/production/23/122/03/11eb9c22-3258-4871-ba0c-06e9dec65dd5.png" alt="logo" />
          </div>
          <div className="navbar__right">
              <div>ABOUT US</div>
              <div>DESTINATION</div>
              <div>EXPERIENCES</div>
              <div>TRAVEL STYLES</div>
              <div>CONTACT US</div>
          </div>      

    </div>
  )
}

export default Navbar;