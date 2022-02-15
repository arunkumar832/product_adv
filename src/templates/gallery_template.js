import { graphql, Link, useStaticQuery } from "gatsby"
import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import styled from "styled-components"
import { Disqus } from 'gatsby-plugin-disqus'


const Gallery_template = () => {
    const data = useStaticQuery(graphql`
        query GalleryFetch {
            allMdx {
                nodes {
                    id
                    slug
                    frontmatter {
                        alt
                        button
                        content
                        name
                        featuredImage {
                            childImageSharp {
                                gatsbyImageData(layout: FULL_WIDTH)
                            }
                        }
                    }
                }
            }
        }      
    `)
    
    function getNodeDetails(data) {
        const galleryArray = []
        const slug = typeof window !== 'undefined' && window.location.pathname
        data.allMdx.nodes.forEach(node => {
            if (slug && slug.replaceAll("/", "") === node.slug.replaceAll("/", "")){
                galleryArray.push(
                    <div css={`padding: 50px 250px;`}>
                        <h1>Hi Slack Team, this is <span dangerouslySetInnerHTML={{__html: node.frontmatter.name}} /> page</h1>
                        <br /><br />
                        <ProductImage
                            image={getImage(node.frontmatter.featuredImage.childImageSharp.gatsbyImageData)}
                            alt={node.frontmatter.alt}
                            loading="eager"
                        />
                        <br /><br />
                        <h4>Description</h4>
                        <ProductContent>{node.frontmatter.content}</ProductContent>
                        <br /><br />
                        <Disqus
                            identifier={node.id}
                            title={node.name}
                            url={window.location.href}
                        />
                    </div>
                )
            }
        });
        console.log(galleryArray)
        return galleryArray
    }
    return (
        <div css={`background:forestgreen; color:white; width:100%; height:1500px;`}>
            <Layout>
                {getNodeDetails(data)}
                <Link to="/"> Go To Home Page </Link>
            </Layout>
        </div>
    )
}

export default Gallery_template

const ProductImage = styled(GatsbyImage)`
    width: 100%;
    height: 25rem;
    border-radius: 10px;
    filter: brightness(100%);
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
`
const ProductContent = styled.p`   
`