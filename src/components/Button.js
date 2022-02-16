import styled from "styled-components";
import { Link } from "gatsby"
import React from 'react'
import { useAuth0 } from "../utils/authentication";

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

const NavRestrictedBtn = styled.button`
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