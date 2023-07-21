import { Link, graphql } from "gatsby";
import * as React from "react"
import Layout from "../components/Layout";
import ImagesLayout from "../components/ImagesLayout";
import { StaticImage } from "gatsby-plugin-image";



export default function Home ({ data,className }) {


  return (
    <Layout>
      <div className="xl:block px-12 py-36 bg-secondary bg-hero">
      {/* <StaticImage 
              src='../images/IMG_1851.JPG' 
              placeholder="blurred"
              layout="fixed"
              width={500}
              height={550}
              className="absolute right-10"
              alt='Mini Quesadilla' /> */}
        <h3 className="xl:text-5xl text-left mx-5 py-10 font-bold text-white uppercase font-primary">Open for delivery &amp; Pick up</h3>
        <h1 className="xl:text-8xl text-left uppercase text-college mb-16 font-bold font-secondary">we are not mexican,<br />we are naija-mex</h1>
         <span className="flex"> 
           <Link to="http://wa.me/2348097128682/" className="xl:bg-college text-white my-10 uppercase p-5 justify-start font-2xl">order online</Link>
         </span>
      </div>
      <div className="xl:bg-primary p-4">
        <div className="grid grid-cols-3">
          <div className="card-div">
            <h2 className="card-h2">the food</h2>
            <p className="card-p"> Cuisine is one of the three pillars that makes us El Padrino and we always make sure that from Tacos to Loaded Nachos, 
              we do not cut corners, because we take pride in crafting fresh and flavourful Mexican meals that are not only delicious, but also healthy. 
              We achieve this by sourcing ingredients from trusted local suppliers then combining these ingredients using tried and tested techniques to 
              bring out the flavour of each and every item on our menu.</p>
          </div>
          <div className="card-div col-span-2">
           <StaticImage 
              src='../images/IMG_1757.JPG' 
              placeholder="blurred"
              layout="fullWidth"
              className=""
              alt='Mini Quesadilla' />
          </div>
          <div className="card-div col-span-2">
          <StaticImage 
              src='../images/IMG_1851.JPG' 
              placeholder="blurred"
              layout="fullWidth"
              className=""
              alt='Mini Quesadilla' />
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

