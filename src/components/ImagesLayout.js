import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'




export default function ImagesLayout() {

  
  return (
    <React.Fragment>
      <div className='bg-white'>
        <div className='xl:py-12'>
          <h2 className='xl:text-6xl font-secondary uppercase text-secondary font-bold'>✨✨✨✨✨ Popular ✨✨✨✨✨<br />✨✨✨✨✨Signature Meals✨✨✨✨✨</h2>
        </div>
        <div>
          <div className='card px-4'> 
          <div>
             <StaticImage 
              src='../images/IMG_1658.JPG' 
              placeholder="blurred"
              layout="fullWidth"
              alt='Breakfast Tacos' />
              <figcaption className='font-primary text-3xl uppercase font-bold'>Breakfast Tacos</figcaption>
          </div>
          <div>
              <StaticImage 
              src='../images/IMG_1901.JPG' 
              placeholder="blurred"
              layout="fullWidth"
              alt='Loaded Nachos' />
              <figcaption className='font-primary text-3xl uppercase font-bold'>Loaded Nachos</figcaption>
          </div>
          <div>
              <StaticImage 
              src='../images/IMG_1800.JPG' 
              placeholder="blurred"
              layout="fullWidth"
              alt='Quesadilla' />
              <figcaption className='font-primary text-3xl uppercase font-bold'>Quesadilla</figcaption>
              </div>
          </div>
          <span className="flex"> 
           <Link to="/" className="xl:bg-college text-white my-10 uppercase p-5 justify-center mx-auto font-2xl">full menu</Link>
         </span>
        </div>
      </div>
    </React.Fragment>
)
}

