import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
// import {FaRegLightbulb} from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby'

const Testimonials = () => {
    const data = useStaticQuery(graphql`
        query TestimonialsQuery {
            allTestimonialsJson(sort: {fields: img___modifiedTime, order: DESC}) {
                nodes {
                    name
                    msg
                    img {
                        childImageSharp {
                            gatsbyImageData(layout: FULL_WIDTH)
                        }
                    }
                }
            }
        }          
    `
    )
    function getTestimonials(data){
            const testimonialsArray = []
            data.allTestimonialsJson.nodes.forEach((item, index) => {
                testimonialsArray.push(
                    <Testimonial key={index}>
                        <IoMdCheckmarkCircleOutline css={`
                            color: indianred;
                            font-size: 2rem;
                            margin-bottom: 1rem;
                            `}/>
                        <h3>{item.name}</h3>
                        <p>{item.msg}</p>
                    </Testimonial>
                )
        });
        return testimonialsArray
    }

    return (
        <TestimonialsContainer>
            {/* <TopLine>
                Testimonials
            </TopLine> */}
            <Description>
                What People are Saying
            </Description>
            <ContentWrapper>
                <ColumnOne>
                    {getTestimonials(data)}
                </ColumnOne>
                <ColumnTwo>
                    {data.allTestimonialsJson.nodes.map((item, index) => (
                        <Images
                            key={index}
                            image={item.img.childImageSharp.gatsbyImageData}
                            alt={item.name}
                            loading="eager"
                        />
                    ))}
                </ColumnTwo>
            </ContentWrapper>
        </TestimonialsContainer>
    )
}

export default Testimonials

const TestimonialsContainer = styled.div`
clip-path: polygon(50% 0%,50% 0%,100% 8%,100% 95%,80% 100%,20% 100%,0 95%,0 8%);
    width: 100%;
    background: linear-gradient(to top, greenyellow, aqua);;
    color: #000;
    padding: 8rem calc((100vw - 1000px)/2);
    height: 70%;
`
const Description = styled.p`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: bold;
`
const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`
const ColumnOne = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
`
const Testimonial = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;
    
    h3 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-style: italic;
    }
    p {
        color: #3b3b3b;
    }
`
const ColumnTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 5rem;
    grid-gap: 10px;

    @media screen and (max-width: 500px){
        grid-template-columns: 1fr;
    }
`
const Images = styled(GatsbyImage)`
    border-radius: 10px;
    height: 100%;
`