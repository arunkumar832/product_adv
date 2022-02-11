import styled from "styled-components";
import { Link } from "gatsby"
import React from 'react'
import { useAuth0 } from "../utils/authentication";

const RestrictPage = () => {
    const { isAuthenticated, loginWithRedirect } = useAuth0()
    return (
        <div>
            <center css={`position: absolute; left: 24%; top: 35%`}>
                {!isAuthenticated && (
                    <>
                    <p css={`color:floralwhite; font-weight: bold; font-size: 4rem; width: 60rem`}>Kindly Login before you proceed</p><br />
                    <NavRestrictedBtn onClick={() => loginWithRedirect({})} primary big round> Login/Register </NavRestrictedBtn>
                    </>
                )}
            </center>
            <center css={`
                position: absolute; left: 37%; top: 17%;
                @media screen and (max-width: 768px){
                    position: absolute; left: 10%; top: -200px%;
                }
            `}>
                {isAuthenticated && (
                    <>
                    <Button class="mobileVer" to="/account/execute" primary big round css={`
                        @media screen and (max-width: 768px){
                            font-size: 10px;
                            display: inline-block;
                            margin: 0 1rem;
                        }
                    `}>View Python Example</Button>{` `}
                    <Button class="mobileVer" to="/account/profile" primary big round css={`
                        @media screen and (max-width: 768px){
                            font-size: 10px;
                            margin: 0 1rem;
                            display: inline-block;
                        }
                    `}>View Profile</Button>
                    </>
                )}
            </center>
        </div>
    )
}

export default RestrictPage

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? '#F26A2E' : '#077BF1')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 35px' : '10px 32px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px' : '16px')};
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
    background: ${({ primary }) => (primary ? '#F26A2E' : '#077BF1')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 35px' : '10px 32px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px' : '16px')};
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