import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

import * as styles from '../styles/home.module.css'
import { GatsbyImage  } from "gatsby-plugin-image"

export default function Home({ data }) {
  console.log(data.file);
  

  return (
    <Layout>        
        <section className={styles.header}>
          <div>
            <h2 >Design</h2>
            <h3>Develop & Deploy</h3>
            <p>UX designer & web developer</p>
            
            <Link to="/projects/" className={styles.btn}>My Portfolio Projects</Link>
            
          </div>
          <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="site image" style={ {maxWidth: '100%'}}/>        
        </section>
    </Layout>
  )
}

export const query = graphql `
query MyQuery {
  file(relativePath: {eq: "banner.png"}) {
     childImageSharp {
       gatsbyImageData(
         
         placeholder: BLURRED
         formats: [AUTO, WEBP, AVIF]
       )
     }
  }
}
`