import React from 'react'
import { graphql, Link } from 'gatsby'
//import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import *as styles from '../../styles/projects.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


export default function Projects({ data }) {
    console.log(data)
    const contact  = data.contact.siteMetadata.contact
    
    const  projects = data.projects.nodes  

    return (

        <Layout>
            <div className={styles.portfolio}>
                <h2>Portfolio</h2>
                <h3>Projects and Websites I've created</h3>
           
            <div className={styles.projects}>
                {
                    projects.map((project)=>(
                        
                        
                         <Link to={"/projects/"+ project.frontmatter.slug} key={project.id}>
                            <div >
                                <GatsbyImage image={project.frontmatter.thumb.childImageSharp.gatsbyImageData}/>
                                <h3>{project.frontmatter.title}</h3>
                                <p>{project.frontmatter.stack}</p>
                            </div>
                          </Link>
                    ))
                }
                
                </div>   
            <p> Like what you see? Email me at {contact} for a quote!</p>
            </div>            
        </Layout>
    )
}

export const query= graphql `
query TheQuery {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        stack
        title
        slug
        
        thumb {
          
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}



`