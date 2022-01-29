import * as React from "react"
import NavBar from "./NavBar"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {

  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <main>{children}</main>
    </div>
  )
}

export default Layout
