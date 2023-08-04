import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'

export default function Modal({ toggleModal }) {
  return (
    <div className='modal'>  
      <button onClick={toggleModal}><FontAwesomeIcon icon={faTimes} size="2x" className='mx-4' /></button>
            <div className='text-center mx-auto'>
              <ul className='modal_content'>
               <Link to="/"><li className='nav-link'>Home</li></Link>
               <Link to="https://elpadrino.africa.restaurant/"><li className='nav-link'>Menu</li></Link>
               <Link to=""><li className='nav-link'>Catering</li></Link>      
              </ul>
            </div>
         </div>
  )
}


