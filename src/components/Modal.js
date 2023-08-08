import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'


export default function Modal({ toggleModal }) {
  return (
    <div className='modal'>  
      <button onClick={toggleModal} className='flex flex-row-reverse my-5 mx-4'><FontAwesomeIcon icon={faTimes} size="2x" /></button>
            <motion.div className='text-center mx-auto'>
              <ul className='modal_content'>
               <Link to="/"><li className='nav-link'>Home</li></Link>
               <a href="https://elpadrino.africa.restaurant/"><li className='nav-link'>Menu</li></a>
               <Link to="/catering/"><li className='nav-link'>Catering</li></Link>      
              </ul>
            </motion.div>
         </div>
  )
}


