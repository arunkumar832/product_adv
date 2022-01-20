import React from 'react'
import styled from 'styled-components'
import subscibe_bg from "../assets/images/subscribe/SubscribeBg.jpg"
import { Button } from './Button'
import addToMailchimp from "gatsby-plugin-mailchimp"

class Subscribe extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            name: "",
            message: "SUBSCRIBE THE LATEST NEWS ABOUT US!!!"
        }
    }
    handleSubmit = async(e) => {
        e.preventDefault();
        const result = await addToMailchimp(this.state.email, { NAME: this.state.name.toUpperCase() })
        if (result.result === "error"){
            if (result.msg.includes("already subscribed")){
                this.setState({message: `${this.state.name ? this.state.name.toUpperCase(): "Hi"}, YOU'VE ALREADY SUBSCRIBED!!!`})
            }
            else {
                this.setState({message: result.msg.toUpperCase() + "!!!"})
            }
        }
        else {
            this.setState({message: result.msg.toUpperCase() + "!!!"})
        }
        this.setState({email: "", name: ""})
      }
    changeEmailHandler = (event) => {
        this.setState({email: event.target.value})
    }
    changeNameHandler = (event) => {
        this.setState({name: event.target.value})
    }
    render(){
        return (
            <SubscribeContainer>
                <SubscribeContent>
                    <h1>Want to listen updates from us</h1>
                    <form name="slack_team_subscribe_form" method="post" onSubmit={this.handleSubmit}>
                        <FormWrap>
                            <label htmlFor='name'>
                                <input type="text" placeholder='Enter your name' name="NAME" id="mce-NAME" value={this.state.name}
                                    onChange={this.changeNameHandler}/>
                            </label>
                            <label htmlFor='email'>
                                <input
                                    type="email"
                                    placeholder='Enter your email'
                                    name="EMAIL"
                                    id="mce-EMAIL"
                                    value={this.state.email}
                                    onChange={this.changeEmailHandler}
                                    required/>
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
                            <p>{this.state.message}</p>
                        </FormWrap>
                    </form>
                </SubscribeContent>
            </SubscribeContainer>
        )
    }
    }
    
export default Subscribe


const SubscribeContainer = styled.div`
    background: linear-gradient(180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 35%,
        rgba(0, 0, 0, 0.1) 100%),
        url(${subscibe_bg}) no-repeat center;
    background-size: cover;
    height: 650px;
    width: 100%;
    padding: 2rem calc((100vw - 900px)/2);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`
const SubscribeContent = styled.div`
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
        font-size: clamp(1rem, 3vw, 1.5rem);
        padding: 1rem 1rem;
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