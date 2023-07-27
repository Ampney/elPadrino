import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import { motion } from "framer-motion"


export const Navbar = () => {
  const ham =    <div className='self-center'><FontAwesomeIcon icon={faBars} size="2x" className='mx-4' /></div>
 

  return (
      <div className='font-sans flex xl:flex-row justify-between'>
        <div className='xl:mx-10 xl:my-10 w-auto'>
          <StaticImage 
              className='lg:w-16 xl:w-20'
              src='../images/ELPADRINO.png' 
              placeholder="traceSVG"
              layout="fullWidth"
              alt='logo' />
        </div>
        
        <div className='lg:my-auto mr-9 xl:mr-10 my-auto'> 
          <motion.ul     
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          ease: "linear",
          duration: 2,
        }}
        className='lg:flex lg:flex-row cursor-pointer xl:flex flex-row'>
            <Link to="/"><li className='nav-link'>Home</li></Link>
            <Link to="https://elpadrino.africa.restaurant/"><li className='nav-link'>Menu</li></Link>
            <Link to=""><li className='nav-link'>Rent Our Space</li></Link>      
          </motion.ul>
        </div>
        </div>
  ) 
}
