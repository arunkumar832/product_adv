import React from 'react'
import styled from 'styled-components'
import contact_bg from "../assets/images/contact_us/contactBg.jpg"
import { Button } from './Button'

export const Contact = () => {
    return (
        <ContactContainer>
            <ContactContent>
                <h1>Want to listen updates from us</h1>
                <p>Submit your email-id to subscibe the latest news about us</p>
                <form name="slact_team_contact_form" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                    <FormWrap>
                        <label htmlFor='name'>
                            <input type="text" placeholder='Enter your name' id="name" />
                        </label>
                        <label htmlFor='email'>
                            <input type="email" placeholder='Enter your email' id="email" />
                        </label>
                        <Button type="submit" as="button" primary round
                            css={`
                                height: 48px;
                                
                                @media screen and (max-width: 768px){
                                    width: 100%;
                                    min-width: 350px;
                                }

                                @media screen and (max-width: 400px){
                                    width: 100%;
                                    min-width: 250px;
                                }
                            `}
                        >Subscribe</Button>
                    </FormWrap>
                </form>
            </ContactContent>
        </ContactContainer>
    )
}


const ContactContainer = styled.div`
    background: linear-gradient(180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 35%,
        rgba(0, 0, 0, 0.1) 100%),
        url(${contact_bg}) no-repeat center;
    background-size: cover;
    height: 550px;
    width: 100%;
    padding: 2rem calc((100vw - 900px)/2);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContactContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
        margin-bottom: 1rem;
        font-size: clamp(1rem, 5vw, 3rem);
        padding: 0 1rem;
    }
    p {
        text-align: center;
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        padding: 0 1rem;
        margin-bottom: 2rem;
    }
    form {
        z-index: 10;
    }
`
const FormWrap = styled.div`
    input {
        padding: 1rem 1.5rem;
        outline: none;
        width: 300px;
        height: 45px;
        border-radius: 50px;
        border: none;
        margin-right: 1rem;
    }

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        padding: 0 1rem;

        input {
            margin-bottom: 1rem;
            width: 100%;
            margin-right: 0;
        }
    }
`