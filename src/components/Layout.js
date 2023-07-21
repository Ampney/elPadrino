
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

  const title = data.site.siteMetadata;
  
  
  return (
    <div className="box-border xl:text-center mx-auto max-h-screen block">
      <Helmet title={title.title} /> 
      <Navbar/>
      <div>
      {children}
      </div> 
      <Footer/>
    </div>
  )
}

