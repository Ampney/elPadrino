import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export const Navbar = () => {
  return (
      <div className='font-primary xl:flex flex-row justify-between'>
        <div className='mx-10 my-10 w-auto'>
          <StaticImage 
              className='w-20'
              src='../images/ELPADRINO.png' 
              placeholder="traceSVG"
              layout="fullWidth"
              alt='logo' />
        </div>
        <div className='xl:mr-10 my-auto'> 
        <ul className='xl:flex flex-row'>
          <li className='nav-link'>Home</li>
          <li className='nav-link'>Menu</li>
          <li className='nav-link'>Rent Our Space</li>
        </ul>
        </div>
      </div>
  ) 
}
