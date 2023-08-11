import * as React from "react"
import { StaticImage, getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'
import { motion } from "framer-motion"
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { motiondiv, motionh3, motiondrop } from ".";





const Catering = ({ data }) => {

  const text = "#PADRINOEXPERIENCE ";
  const image = data.file.childImageSharp.gatsbyImageData
  const backgroundImage = convertToBgImage(image)

  return(
    <Layout>
      <div className="">
      <BackgroundImage
         className="opacity-60"
         Tag="section"
         {...backgroundImage}
       >
         <div className="text-center xl:py-48 lg:py-48 sm:py-10 bg-transparent">
          <h2 className="font-secondary text-padrino sm:text-3xl sm:py-5 xl:text-6xl uppercase font-semibold py-8 lg:text-6xl lg:py-8">Catering</h2>
          <motion.p 
           initial="hidden"
           animate="visible"
           variants={motiondrop} 
           className="font-sans uppercase text-white xl:text-3xl font-bold xl:py-5 sm:text-xl">Let us bring the <span className="text-padrino">{ text }</span>to your next event</motion.p>
          <p className="text-white mx-auto xl:w-9/12 xl:text-2xl sm:text-lg">Whether it's a casual get-together or an office lunch, a birthday celebration or a wedding, baby or bridal shower, or even a corporate conference, 
          El Padrino is committed to providing you and your guests with a fresh and flavorful experience that will leave a lasting impression. 
          We are here to take care of all your catering needs, no matter how large or small.</p>
         </div>
       </BackgroundImage>
         <motion.div 
           initial="hidden"
           animate="visible"
           variants={motiondiv} 
           className="px-5">
            <h2 className="font-secondary text-padrino sm:text-3xl xl:text-6xl uppercase font-bold my-10 lg:text-6xl">Catering menu</h2>
            <StaticImage 
              src='../images/Catering.jpeg' 
              placeholder="blurred"
              layout="fullWidth"
              alt='Tacos' />
            <span className="flex"> 
             <a href="uzo.umeh@elpaldrino.com" 
              className="button mx-auto">inquire now</a>
            </span>
         </motion.div>
      </div>
    </Layout>
  )
}

export default Catering;

export const placeholderImage = 
graphql`
        query {
          file(relativePath: {eq: "Darker Tacobites.png"}) {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      `