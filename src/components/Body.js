import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import BgVideo from '../assets/videos/bg_video.mp4'

const Body = () => {
    return (
       <BodyContainer>
           <BodyBg>
               <VideoBg src={ BgVideo } type="video/mp4" autoPlay loop muted playsInline />
           </BodyBg>
           <BodyContent>
               <BodyItems>
                   <BodyH1>Body content with h1</BodyH1>
                   <BodyP>Body content with P tag</BodyP>
                   <Button primary="true" round="true" big="true" to="/something">Do Something</Button>
               </BodyItems>
           </BodyContent>
       </BodyContainer>
    )
}

export default Body

const BodyContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: 100vh;
    padding: 0 1rem;
    position: relative;
    margin-top: -80px;
    :before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 2;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.6) 100%
            ),
            linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.2) 0%,
            transparent 100%
            );
    }
`
const BodyBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`
const BodyContent = styled.div`
    z-index: 3;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px)/2);
`
const BodyItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;
`
const BodyH1 = styled.h1`
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    font-weight: bold;
    padding: 0 1rem;
`
const BodyP = styled.p`
    font-size: clamp(1rem, 3vw, 3rem);
    margin-bottom: 2rem;
    font-weight: 400;
`