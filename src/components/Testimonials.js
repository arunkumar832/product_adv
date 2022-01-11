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
            <TopLine>
                Testimonials
            </TopLine>
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
    width: 100%;
    background: darkkhaki;
    color: #000;
    padding: 2rem calc((100vw - 1000px)/2);
    height: 50%;
`
const TopLine = styled.p`
    color: #077bf1;
    font-size: 1rem;
    padding-left: 2rem;
    margin-bottom: 0.75rem;
`
const Description = styled.p`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 4rem;
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