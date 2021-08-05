import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/layout'
import * as styles from '../styles/template.module.css'


export default function Template( { data }  ) {
    let post = data.markdownRemark.frontmatter
    console.log(data);
    return (
        <Layout>
            <div className={styles.featured}>
                <h2>{post.title}</h2>
                <h3>{post.stack}</h3>
                
                <div>
                  <GatsbyImage image={getImage(post.feature.childImageSharp.gatsbyImageData)} alt={post.slug} className={styles.fImage}/>
                </div>
                <div className={styles.html} dangerouslySetInnerHTML={{ __html : data.markdownRemark.html}  } />
            {/*used for Dynamic data  */}
            </div>
        </Layout>
    )
}

export const query = graphql `
query ProjectDetails($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      stack
      title
      feature {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  }
}

`