import React from 'react'
import NavbarLeft from './navbarItem/NavbarLeft'
import NavbarRight from './navbarItem/NavbarRight'

const Navbar = () => {
  return (
    <div className='d-flex justify-content-between align-items-center '>
        <NavbarLeft/>
        <NavbarRight/>
    </div>
  )
}

export default Navbar