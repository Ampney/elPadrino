  import * as React from "react"
  import { Link, graphql } from "gatsby";
  import { StaticImage } from "gatsby-plugin-image";
  import { motion } from "framer-motion"
  import Layout from "../components/Layout";
  import ImagesLayout from "../components/ImagesLayout";
  import bgImg from "../images/IMG_1864.JPG";


  const motionh3 ={
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
  const motionh1 = {
    hidden: {
      opacity: 0,
      y: "-100vw",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    }
  }
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
        stagger:(0.1, { ease: "easeOut" }),
        scale: {duration: 1},
        opacity: {duration: 1}
    }
    }
  }
  const styles = {
    main: {
      backgroundImage: 'url(../images/IMG_1864.JPG)',
      width: "100%",
    }
  };


  export default function Home ({ data,className }) {


    return (
      <Layout>
        <div className="block xl: px-12 py-36 main lg:px-10 lg:py-24 sm:py-4" 
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '500px',
        }} >
        {/* <StaticImage 
                src='../images/IMG_1864.JPG' 
                placeholder="blurred"
                layout="fixed"
                width={500}
                height={550}
                className="absolute right-10 -z-5"
                alt='Mini Quesadilla' /> */}
          <motion.h3 
          initial="hidden"
          animate="visible"
          variants={motionh3}
          className="font-sans text-base py-4 mx-0 lg:text-3xl xl:text-5xl text-left xl:mx-2 xl:py-10 font-bold text-black uppercase">Open for delivery &amp; Pick up</motion.h3>
          <motion.h1 
          initial="hidden"
          animate="visible"
          variants={motionh1}
          className="font-secondary text-2xl lg:text-5xl xl:text-8xl text-left uppercase text-black mb-16 font-bold">we are not mexican,<br/>we are naija-mex</motion.h1>
          <motion.span className="flex"> 
            <Link to="https://elpadrino.africa.restaurant/" 
            className="button">order online</Link>
          </motion.span>
        </div>


        <div className="xl:bg-primary p-4">
          <div className="">

             <motiondiv 
               initial="hidden"
               whileInView="visible"
               className="grid grid-cols-3"
               variants={motiondiv} >
               <div className="card-div">
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
             </motiondiv>  

          <motion.div
             initial="hidden"
             whileInView="visible"
             className="grid grid-cols-3"
             variants={motiondiv} >
            <div className="card-div col-span-2">
              <StaticImage 
                src='../images/Space.JPG' 
                placeholder="blurred"
                layout="fullWidth"
                alt='ElPadrino' />
            </div>
            <div className="card-div text-right">
              <h2 className="card-h2">the space</h2>
              <p className="card-p"> Community is the second important pillar of what makes us El Padrino and we tried to reflect that sense of community
                within our space by crafting a unique community-styled environment where everyone is welcome to be their most authentic selves anytime, 
                any day of the week (but especially on Tuesdays).</p>
            </div>
          </motion.div>

          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-3"
            variants={motiondiv}>
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
          </motion.div>

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

