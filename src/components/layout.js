import * as React from "react"
import { Footer } from "./Footer"
import NavBar from "./NavBar"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {

  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
