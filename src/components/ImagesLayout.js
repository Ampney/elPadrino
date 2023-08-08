import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { motion } from 'framer-motion'
import { motiondiv, motionimage } from '../pages'



export default function ImagesLayout() {

  
  return (
    <React.Fragment>
      <div className='bg-white'>  
     
        <div className='xl:py-12 lg:py-10 sm:py-5'>
          <motion.h2 
             initial="hidden"
             whileInView="visible"
             variants={motiondiv}
             className='font-secondary sm:text-xl xl:text-6xl uppercase font-bold lg:text-4xl'>✨✨✨✨✨ Popular ✨✨✨✨✨<br />✨✨✨✨✨Signature Meals✨✨✨✨✨</motion.h2>
        </div>
        <div>
          <motion.div 
           initial="hidden"
           whileInView="visible"
           variants={motionimage}
           className='card px-4'> 
          <div>
             <StaticImage 
              src='../images/IMG_1715.JPG' 
              placeholder="blurred"
              layout="fullWidth"
              alt='Tacos' />
              <figcaption className='figcaption-p'>Tacos</figcaption>
          </div>
          <div>
              <StaticImage 
              src='../images/IMG_2612.JPG' 
              placeholder="blurred"
              layout="fullWidth"
              alt='Mini Quesadilla ' />
              <figcaption className='figcaption-p'>Mini Quesadilla</figcaption>
          </div>
          <div>
              <StaticImage 
              src='../images/IMG_1734.JPG' 
              placeholder="blurred"
              layout="fullWidth"
              alt='Burrito' />
              <figcaption className='figcaption-p'>Burrito</figcaption>
              </div>
          </motion.div>
          <span className="flex"> 
           <a href="https://elpadrino.africa.restaurant/" className="btn">full menu</a>
         </span>
        </div>
      </div>
    </React.Fragment>
)
}

