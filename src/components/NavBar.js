import React, {useState} from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"

const NavBar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <IconContext.Provider value={{color: "#FFF" }}>
      <Nav>
        <CompanyName to="/">SLACKTEAM</CompanyName>
        <MobileBarIcon onClick={handleClick}>
            {click? <FaTimes /> : <FaBars />}
        </MobileBarIcon>
        <NavMenu onClick={handleClick} click={click}>
            { menuData.map((item, index) => (
                <NavLink id="MenuItems" to={item.link} key={index}> {item.title} </NavLink>
            ))}
        </NavMenu>
        <NavBtn>
          <Button primary="true" round="true" to="/something"> Do Something </Button>
        </NavBtn>
      </Nav>
    </IconContext.Provider>
  )
}

export default NavBar

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`
const CompanyName = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: bolder;
`
const NavLink = styled(Link)`
  font-weight: bolder;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  @media screen and (max-width: 768px){
    width: 100%;
    justify-content: center;
    &:hover {
      filter: brightness(100%);
      color: black;
      background: #fff;
    }
  }
`
const MobileBarIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;


  @media screen and (max-width: 768px){
    flex-direction: column;
    width: 100%;
    height: 40vh;
    position: absolute;
    top: 80px;
    top: ${({click}) => (click? "100%": "-1000px")};
    opacity: 1;
    transition: all 0.2s ease;
    background: rgba(255,120,30,0.9);
  }
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px){
    display: none;
  }
`