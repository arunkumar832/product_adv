import * as React from "react"
import NavBar from "./NavBar"
import { GlobalStyle } from "./styles/GlobalStyles"
import { useAuth0 } from "../utils/authentication"

const Layout = ({ children }) => {
  const { loading } = useAuth0()

  if (loading) {
    return <div>Loading...</div>
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
