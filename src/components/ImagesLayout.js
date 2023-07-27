import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'




export default function ImagesLayout() {

  
  return (
    <React.Fragment>
      <div className='bg-white'>
        <div className='xl:py-12 lg:py-10'>
          <h2 className='font-secondary xl:text-6xl uppercase font-bold lg:text-4xl'>✨✨✨✨✨ Popular ✨✨✨✨✨<br />✨✨✨✨✨Signature Meals✨✨✨✨✨</h2>
        </div>
        <div>
          <div className='card px-4'> 
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
          </div>
          <span className="flex"> 
           <Link to="https://elpadrino.africa.restaurant/" className="xl:bg-college text-white my-10 uppercase font-sans p-5 justify-center mx-auto font-2xl lg:p-3">full menu</Link>
         </span>
        </div>
      </div>
    </React.Fragment>
)
}

