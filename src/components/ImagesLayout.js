import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import { motion } from 'framer-motion'




const motiondiv = {
  hidden:{
    opacity: 0, 
    scale: 0.9
  },
  visible: {
    opacity: 1, 
    scale: 1,
    transition:{
      duration: 2,
      scale: {duration: 1},
      opacity: {duration: 1}
  }
  }
}
const motionimage ={
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      opacity: { duration: 1},
      y: { duration: 1}
    }
  }
}


export default function ImagesLayout() {

  
  return (
    <React.Fragment>
      <div className='bg-white'>  
     
        <div className='xl:py-12 lg:py-10'>
          <motion.h2 
             initial="hidden"
             whileInView="visible"
             variants={motiondiv}
             className='font-secondary xl:text-6xl uppercase font-bold lg:text-4xl'>✨✨✨✨✨ Popular ✨✨✨✨✨<br />✨✨✨✨✨Signature Meals✨✨✨✨✨</motion.h2>
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
              src='../images/IMG_1851.JPG' 
              placeholder="blurred"
              layout="fullWidth"
              alt='Burrito' />
              <figcaption className='figcaption-p'>Burrito</figcaption>
              </div>
          </motion.div>
          <span className="flex"> 
           <Link to="https://elpadrino.africa.restaurant/" className="btn">full menu</Link>
         </span>
        </div>
      </div>
    </React.Fragment>
)
}

