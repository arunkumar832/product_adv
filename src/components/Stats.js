import React from 'react'
import styled from 'styled-components'
import { StatsData } from "../data/statsData"

const Stats = () => {
    return (
        <StatsContainer>
            <Heading>Why Choose Us?</Heading>
            <Wrapper>
                { StatsData.map((item, index) => {
                    return (
                        <StatsBox key={index}>
                            <Icon>{item.icon}</Icon>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                        </StatsBox>
                    )
                })}
            </Wrapper>
        </StatsContainer>
    )
}

export default Stats

const StatsContainer = styled.div`
    width: 100%;
    max-height: 100vh;
    background: #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem calc((100vw - 1000px)/2);
`
const Heading = styled.h1`
    text-align: start;
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 3rem;
    padding: 0 2rem;
`
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 500px){
        grid-template-columns: 1fr;
    }
`
const StatsBox = styled.div`
    height: 100%;
    width: 100%;
    padding: 0.5rem 3rem;
`
const Icon = styled.div`
    color: blue;
    font-size: 3rem;
    margin-bottom: 1rem;
`
const Title = styled.div`
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin-bottom: 0.5rem;
`
const Description = styled.p`
    font-size: 1rem;
`