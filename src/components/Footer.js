import React from 'react'

const Footer = () => {

    return (
      <footer className='bg-primary xl:grid grid-cols-2'>
      <div>
        <p>We are open</p>
      </div>
      <div>
        <p>Say ¡Hola! to us </p>
      </div>
      <span className='xl:col-span-2 bg-college py-auto text-xl'> <p>&copy;2023 by ElPadrino Restaurants. All Rights Reserved </p></span>
    </footer>
    )
}

export default Footer;