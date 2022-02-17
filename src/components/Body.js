import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const Body = () => {
    return (
       <BodyContainer>
           {/* <BodyBg>
                <VideoBg src={ BgVideo } type="video/mp4" autoPlay loop muted playsInline />
           </BodyBg> */}
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

// clip-path: polygon(0 0, 100% 0, 100% 80vh, 50% 100%, 0 80vh);
// const BodyContainerBak = styled.div`
//     background: #0c0c0c;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 95vh;
//     padding: 0 1rem;
//     position: relative;
//     margin-top: -80px;
//     :before {
//         content: "";
//         position: absolute;
//         top: 0;
//         bottom: 0;
//         right: 0;
//         left: 50%;
//         width: 100vh;
//         height: 100vh;
//         border-radius: 50%;
//         transform-origin: bottom;
//         transform: translateX(-50%) scale(4);
//         z-index: 2;
//         background: linear-gradient(
//             180deg,
//             rgba(0, 0, 0, 0.2) 0%,
//             rgba(0, 0, 0, 0.6) 100%
//             ),
//             linear-gradient(
//             180deg,
//             rgba(0, 0, 0, 0.2) 0%,
//             transparent 100%
//             );
//         background-color: #0980f0;
//     }
// `

const BodyContainer = styled.div`
    clip-path: polygon(0 0, 100% 0, 100% 70vh, 50% 100%, 0 70vh);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
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
        background: linear-gradient(to top,#7800e1,#bd07ff);
    }
    }
`
// const BodyBg = styled.div`
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     right: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     overflow: hidden;
// `
// const VideoBg = styled.video`
//     width: 100%;
//     height: 100%;
//     -o-object-fit: cover;
//     object-fit: cover;
// `
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