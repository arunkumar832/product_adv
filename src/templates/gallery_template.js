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
                    <ProductWrap>
                        <h1>Hi Slack Team, this is <span dangerouslySetInnerHTML={{__html: node.frontmatter.name}} /> page</h1>
                        <br /><br />
                        <ProductImage
                            image={getImage(node.frontmatter.featuredImage.childImageSharp.gatsbyImageData)}
                            alt={node.frontmatter.alt}
                            loading="eager"
                        />
                        <br /><br />
                        <ProductDesc>Description</ProductDesc>
                        <ProductContent>{node.frontmatter.content}</ProductContent>
                        <br /><br />
                        <Disqus
                            identifier={node.id}
                            title={node.name}
                            url={window.location.href}
                        />
                    </ProductWrap>
                )
            }
        });
        return galleryArray
    }
    return (
        <div css={`background:linear-gradient(to bottom,lightseagreen,lightyellow); color:white; width:100%; height:1800px;`}>
            <Layout>
                {getNodeDetails(data)}
                <Link to="/"> Go To Home Page </Link>
            </Layout>
        </div>
    )
}

export default Gallery_template

const ProductWrap = styled.div`
    padding: 50px 250px;
    @media screen and (max-width: 1299px){
        padding: 15px 30px;
        font-size: 10px;
    }
`
const ProductImage = styled(GatsbyImage)`
    width: 100%;
    height: 25rem;
    border-radius: 10px;
    filter: brightness(100%);
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
`
const ProductContent = styled.p`
    @media screen and (max-width: 1299px){
        font-size: 14px;
    }
`
const ProductDesc = styled.h4`
    font-size: 15px;
    font-weight: bolder;
    line-height: 30px;
`