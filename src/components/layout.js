import * as React from "react"
import { Footer } from "./Footer"
import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {

  return (
    <div>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
