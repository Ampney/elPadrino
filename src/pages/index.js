import * as React from "react"
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion"
import Layout from "../components/Layout";
import ImagesLayout from "../components/ImagesLayout";



export default function Home ({ data,className }) {


  return (
    <Layout>
      <div className="block xl: px-12 py-36 bg-padrino lg:px-10 lg:py-24 sm:py-4">
      {/* <StaticImage 
              src='../images/IMG_1864.JPG' 
              placeholder="blurred"
              layout="fixed"
              width={500}
              height={550}
              className="absolute right-10 -z-5"
              alt='Mini Quesadilla' /> */}
        <motion.h3      
        initial={{opacity: 0, x: -100}}
        animate={{opacity: 1, x:0}}
        transition={{
          ease: "anticipate",
          duration: 2,
          x: { duration: 1 }
        }}className="font-sans text-base py-4 mx-0 lg:text-3xl xl:text-5xl text-left xl:mx-2 xl:py-10 font-bold text-black uppercase">Open for delivery &amp; Pick up</motion.h3>
        <h1 className="font-secondary text-2xl lg:text-5xl xl:text-8xl text-left uppercase text-black mb-16 font-bold">we are not mexican,<br />we are naija-mex</h1>
         <span className="flex"> 
           <Link to="https://elpadrino.africa.restaurant/" className="xl:bg-red-600 text-white my-10 uppercase font-sans p-5 justify-start font-3xl">order online</Link>
         </span>
      </div>
      <div className="xl:bg-primary p-4">
        <div className="grid grid-cols-3">
          <div className="card-div">
            <h2 className="card-h2">the food</h2>
            <p className="card-p"> Welcome to El Padrino, where locally sourced Nigerian ingredients meet Mexican cuisine! 
            We craft fresh, flavorful meals that will leave your taste buds wanting more. Each dish brings the best of both worlds to create a
             unique fusion of authentic tastes that we call Naija-Mexican. Join us and indulge in the El Padrino experience.</p>
          </div>

          
          <div className="card-div col-span-2">
           <StaticImage 
              src='../images/IMG_1952.JPG' 
              placeholder="blurred"
              layout="fullWidth"
              className=""
              alt='Mini Quesadilla' />
          </div>
          <div className="card-div col-span-2">
          <StaticImage 
              src='../images/Space.JPG' 
              placeholder="blurred"
              layout="fullWidth"
              className=""
              alt='ElPadrino' />
          </div>
          <div className="card-div text-right">
            <h2 className="card-h2">the space</h2>
            <p className="card-p"> Community is the second important pillar of what makes us El Padrino and we tried to reflect that sense of community
               within our space by crafting a unique community-styled environment where everyone is welcome to be their most authentic selves anytime, 
               any day of the week (but especially on Tuesdays).</p>
          </div>
          <div className="card-div">
            <h2 className="card-h2">the taqueros</h2>
            <p className="card-p"> Community is the second important pillar of what makes us El Padrino and we tried to reflect that sense of community
               within our space by crafting a unique community-styled environment where everyone is welcome to be their most authentic selves anytime, 
               any day of the week (but especially on Tuesdays).</p>
          </div>
          <div className="card-div col-span-2">
          <StaticImage 
              src='../images/TAQUEROS.jpg' 
              placeholder="blurred"
              layout="fullWidth"
              className=""
              alt='Mini Quesadilla' />
          </div>
        </div>
      </div>
      <ImagesLayout />
    </Layout>
    )
}

export const BgQuery = graphql`
query {
  allFile(filter: {relativePath: {eq: "IMG_1733.JPG"}}) {
    nodes {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
}`

