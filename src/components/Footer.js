import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMobile, faMapLocation, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { StaticImage } from 'gatsby-plugin-image'



const Footer = () => {

    return (
      <footer className='bg-primary font-sans xl:grid grid-cols-2 sm:block'>
      <div className='mx-auto py-10 text-left sm:text-center'>
        <p className='xl:text-5xl xl:my-2 font-bold uppercase my-3 lg:text-3xl'>We are open</p>
        <p className='lis'>Mondays: 9am - 9pm</p>
        <p className='lis'>Tuesdays: 9am - 11pm</p>
        <p className='lis'>Wednesdays: 9am - 9pm</p>
        <p className='lis'>Thursdays: 9am - 9pm</p>
        <p className='lis'>Fridays: 9am - 9pm</p>
        <p className='lis'>Saturdays: 9am - 9pm</p>
        <p className='lis'>Sundays: 9am - 9pm</p>
      </div>
      <div className='xl:flex flex-col mx-auto py-10 cursor-pointer'>
        <span><p className='xl:text-5xl font-bold uppercase my-3 text-left lg:text-3xl sm:text-center'>Say ¡Hola! to us 👋</p></span>
        <span className='span-icon'>
          <FontAwesomeIcon icon={faMapLocation} size="1x"  />
          <p className='footer-link'>256, Etim Inyang Crescent, Victoria Island, Lagos</p>
        </span>
        <span className='span-icon'>
          <StaticImage src='../images/instagram.png' placeholder="blurred" layout="fixed" width={20} height={20} alt='insta'/>
          <a href="https://www.instagram.com/elpadrino.ng/" className='footer-link'>Elpadrino.ng</a>
        </span> 
        <span className='span-icon'>
          <FontAwesomeIcon icon={faEnvelope} size="1x" />
          <a href="uzo.umeh@elpaldrino.com" className='footer-link'>uzo.umeh@elpadrino.com</a>
        </span>
        <span className='span-icon'>
          <FontAwesomeIcon icon={faMobile} size="1x" />
          <a href="tel:8097128682" className='footer-link'>+2348097128682</a>
        </span>
      </div>
      <span className='bg-college sm:text-base sm: col-span-1 xl:col-span-2 xl:py-5 text-xl lg:py-3 lg:text-lg'> <p className='sm:bg-college'>&copy;2023 by ElPadrino Restaurants. All Rights Reserved </p></span>
    </footer>
    )
}

export default Footer;