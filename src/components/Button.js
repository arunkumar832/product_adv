import styled from "styled-components";
import { Link } from "gatsby"
import React from 'react'
import { useAuth0 } from "../utils/authentication";
import Loader from "../assets/gifs/preloader.gif"

const RestrictPage = () => {
    const { isAuthenticated, loginWithRedirect } = useAuth0()
    return (
        <div>
            <center>
                {!isAuthenticated && (
                    <div style={{position: "relative", top: "150px", bottom: 0}}>
                    <LoginAlert>Kindly Login before you proceed</LoginAlert><br />
                    <NavRestrictedBtn onClick={() => loginWithRedirect({})} primary round> Login/Register </NavRestrictedBtn>
                    </div>
                )}
            </center>
            <center>
                {isAuthenticated && (
                    <>
                    <SwitchButtons>
                        <Button to="/account/execute" primary round>View Python Example</Button>{` `}
                        <Button to="/account/profile" primary round>View Profile</Button>
                    </SwitchButtons>
                    </>
                )}
            </center>
        </div>
    )
}

export default RestrictPage

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? 'tomato' : '#077BF1')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 35px' : '10px 32px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px' : '16px')};
    font-weight: bold;
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: ${({ round }) => (round ? '50px' : 'none')};

    &:hover {
        background: ${({ primary }) => (primary ? '#077BF1': '#F26A2E')};
        transform: translateY(-2px);
    }
`

export const NavRestrictedBtn = styled.button`
    background: transparent;
    border: none;
    font-size: 20px;
    font-weight: bolder;
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &:hover {
        filter: brightness(100%);
        color: black;
        background: #fff;
        border-radius: 5px;
        height: 60%;
    };
    @media screen and (max-width: 768px){
        width: 100%;
        justify-content: center;
    }
`
const SwitchButtons = styled.div`
    line-height: 3;
`
const LoginAlert = styled.p`
    color:floralwhite;
    font-weight: bold;
    font-size: 4rem;
    width: 60rem;
    @media screen and (max-width: 1299px){
        width: 40rem;
        text-align: center;
        font-size: 40px;
    }
    @media screen and (max-width: 768px){
        width: 25rem;
        text-align: center;
        font-size: 40px;
    }
`
export const PreLoader = styled.div`
    background-image: url("${Loader}");
    background-repeat: no-repeat;
    mix-blend-mode: multiply;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 700px;
    height: 500px;
    margin-top: -300px;
    margin-left: -350px;
    @media screen and (max-width:720px){
    width: 350px;
    height: 250px;
    margin-top: -200px;
    margin-left: -175px;
    }
`