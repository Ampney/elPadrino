
import React from 'react'
import { Navbar } from './Navbar'
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from 'react-helmet';
import Footer from './Footer';




export default function Layout ({ children }) {
  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  },
  `)

  const title = data.site.siteMetadata.title;
  
  
  return (
    <div className="box-border xl:text-center mx-auto max-w-screen-xl block sm:ax-w-screen-sm sm:overflow-x-hidden">
      <Helmet title={title} /> 
      <Navbar/>
      <div>
      {children}
      </div> 
      <Footer/>
    </div>
  )
}

