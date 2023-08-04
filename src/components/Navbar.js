import React, { useState } from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import { motion } from "framer-motion"
import Modal from './Modal'


export const Navbar = () => {

const [ modal, setModal ] = useState(false);

const toggleModal = () => {

    setModal(!modal)
    }

 

  return (
      <div className='font-sans flex xl:flex-row justify-between bg-white sticky top-0 z-50'>
        <div className='xl:mx-10 xl:my-7 w-auto sm:my-4'>
          <StaticImage 
              className='lg:w-16 xl:w-20 sm:w-10'
              src='../images/ELPADRINO.png' 
              placeholder="traceSVG"
              layout="fullWidth"
              alt='logo' />
        </div>

        <div className='sm:block lg:hidden xl:hidden my-auto'>
        <button onClick={toggleModal}><FontAwesomeIcon icon={faBars} size="2x" className='mx-4' /></button>
       { modal && <Modal toggleModal={ toggleModal} id="modal"/> }
        </div>
        
        <div className='sm:hidden lg:block xl:block lg:my-auto mr-9 xl:mr-10 my-auto'> 
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
            <Link to=""><li className='nav-link'>Catering</li></Link>      
          </motion.ul>
        </div>
        </div>
  ) 
}
