import * as React from "react"
import NavBar from "./NavBar"
import { GlobalStyle } from "./styles/GlobalStyles"
import { useAuth0 } from "../utils/authentication"
import { PreLoader } from "./Button"

const Layout = ({ children }) => {
  const { loading } = useAuth0()

  if (loading) {
    return <PreLoader />
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