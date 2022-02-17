import * as React from "react"
import NavBar from "./NavBar"
import { GlobalStyle } from "./styles/GlobalStyles"
import { useAuth0 } from "../utils/authentication"
import { MutatingDots } from "react-loader-spinner"
import styled from "styled-components"

const Layout = ({ children }) => {
  const { loading } = useAuth0()

  if (loading) {
    return <LoadingSpinner><MutatingDots color="#00BFFF"/></LoadingSpinner>
  }

  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <main>{children}</main>
    </div>
  )
}

export default Layout

const LoadingSpinner = styled.div`
    display: inline-block;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 3cm;
    right: 0;
    width: 200px;
    height: 100px;
    margin: auto;
`
