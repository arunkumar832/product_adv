import * as React from "react"
import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {

  return (
    <div>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
