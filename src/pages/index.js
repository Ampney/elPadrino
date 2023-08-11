import * as React from "react"
import BackgroundImage from 'gatsby-background-image'
import Layout from "../components/Layout";
import ImagesLayout from "../components/ImagesLayout";
import { graphql } from "gatsby";
import { StaticImage, getImage } from "gatsby-plugin-image";
import { useState } from "react";
import { convertToBgImage } from "gbimage-bridge"
import { motion } from "framer-motion"


  export const motionh3 ={
    hidden: {
      opacity: 0,
      x: -100
    },
    visible: {
      opacity: 1,
      x:0,
      transition: {
        ease: "easeIn",
        duration: 2,
        opacity: { duration: 0.5},
        x:{ duration: 1}
      }
    }
  }
  export const motiondrop = {
    hidden:{
      opacity: 0, 
    },
    visible: {
      opacity: [ 1, 0, 1, 0, 1 ],
      transition: {
        ease: "easeIn",
        duration: 5,
      }
    }
  }
   // const motionh1 = {
  //   hidden: {
  //     opacity: 0,
  //     y: "-100vw",
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       type: "spring",
  //       damping: 12,
  //       stiffness: 100,
  //     }
  //   }
  // }
  export const motiondiv = {
    hidden:{
      opacity: 0, 
      scale: 0.9
    },
    visible: {
      opacity: 1, 
      scale: 1,
      transition:{
        duration: 2,
        stagger:(0.1, { ease: "easeOut" }),
        scale: {duration: 1},
        opacity: {duration: 1}
    }
    }
  }
  export const motionimage ={
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



  export default function Home ({ data }) {
    const image = data.file.childImageSharp.gatsbyImageData

    const backgroundImage = convertToBgImage(image)

    return (
      <Layout>
 <BackgroundImage
         Tag="section"
         {...backgroundImage}
         preserveStackingContext
       >
        
        
        <div className="block xl: px-12 py-36 main lg:px-10 lg:py-24 sm:py-0 before:bg-scroll after:bg-scroll" style={{ maxHeight: 900, minWidth: 1000, }}>
          <motion.h3 
          initial="hidden"
          animate="visible"
          variants={motionh3}
          className="font-sans sm:text-xl py-4 mx-0 lg:text-3xl xl:text-5xl text-left xl:mx-2 xl:py-10 font-bold text-white uppercase">Open for delivery &amp; Pick up</motion.h3>
          <motion.h1 
          initial="hidden"
          animate="visible"
          variants={motionh3}
          className="font-secondary sm:text-2xl sm:my-0 lg:text-5xl xl:text-8xl text-left uppercase text-white mb-16 font-bold">
            <span className="text-padrino">we</span> are not <span className="text-red-500">mexican</span>,<br/>we are <span className="text-green-600">naija</span>-<span className="text-padrino">mex</span></motion.h1>
          <motion.span className="flex"> 
            <a href="https://elpadrino.africa.restaurant/" 
            className="button">order online</a>
          </motion.span>
        </div>

            </BackgroundImage>

        <div className="xl:bg-primary p-4">
          <div className="">

             <motion.div 
               initial="hidden"
               whileInView="visible"
               className="grid grid-cols-3 sm:grid-cols-1"
               variants={motiondiv} >
               <div className="card-div sm:order-last">
                 <h2 className="card-h2">the food</h2>
                 <p className="card-p"> Welcome to El Padrino Restaurant, where fresh and flavorful Nigerian ingredients meet Mexican cuisine! 
                 We craft each dish to bring out the best of both worlds, creating a fusion we call; Naija-Mexican.</p>
               </div>
               <div className="card-div col-span-2">
                <StaticImage 
                  src='../images/IMG_1952.JPG' 
                  placeholder="blurred"
                  layout="fullWidth"
                  className=""
                  alt='Mini Quesadilla' />
               </div>
             </motion.div>  

          <motion.div
             initial="hidden"
             whileInView="visible"
             className="grid grid-cols-3 sm:grid-cols-1"
             variants={motiondiv} >
            <div className="card-div col-span-2">
              <StaticImage 
                src='../images/Space.JPG' 
                placeholder="blurred"
                layout="fullWidth"
                alt='ElPadrino' />
            </div>
            <div className="card-div lg:text-right xl:text-right sm:text-center">
              <h2 className="card-h2">the space</h2>
              <p className="card-p"> Community is the second important pillar of what makes us El Padrino and we tried to reflect that sense of community
                within our space by crafting a unique community-styled environment where everyone is welcome to be their most authentic selves anytime, 
                any day of the week (but especially on Tuesdays).</p>
            </div>
          </motion.div>

          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-3 sm:grid-cols-1"
            variants={motiondiv}>
           <div className="card-div sm:order-last">
              <h2 className="card-h2">the taqueros</h2>
              <p className="card-p"> The heart of El Padrino, the champions of El Padrino's unique culture are the people that make El Padrino, El Padrino. Our Taqueros are energetic, 
              passionate and crazy about treating everything from the food, to each other and most importantly, YOU; with dignity, love and respect.).</p>
           </div>
           <div className="card-div col-span-2">
             <StaticImage 
               src='../images/TAQUEROS.jpg' 
               placeholder="blurred"
               layout="fullWidth"
               className=""
               alt='Mini Quesadilla' />
           </div>
          </motion.div>

          </div>  
        </div>

        <ImagesLayout />
      </Layout>
      )
  }


export const placeholderImage = 
graphql`
        query {
          file(relativePath: {eq: "1.png"}) {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      `