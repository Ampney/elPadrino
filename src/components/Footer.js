import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMobile, faMapLocation, faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {

    return (
      <footer className='bg-primary xl:grid grid-cols-2'>
      <div>
        <p>We are open</p>
      </div>
      <div>
        <span><p>Say ¡Hola! to us </p></span>
        <span><FontAwesomeIcon icon={faEnvelope} size="4x" /></span>
        <span><FontAwesomeIcon icon={faMapLocation} size="4x"  /></span>
        <span><FontAwesomeIcon icon={faMobile} size="4x" /></span>
        <span></span>
        {/* <FontAwesomeIcon icon={} size="1x"  /> */}
      </div>
      <span className='xl:col-span-2 bg-college py-auto text-xl'> <p>&copy;2023 by ElPadrino Restaurants. All Rights Reserved </p></span>
    </footer>
    )
}

export default Footer;