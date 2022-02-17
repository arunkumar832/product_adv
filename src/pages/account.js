import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Profile from "../components/restricted_components/Profile"
import PrivateRoute from "../components/restricted_components/PrivateRoute"
import RestrictPage from "../components/Button"
import PostToPython from "../components/restricted_components/PostToPython"

const Account = () => (
  <div css={`background:linear-gradient(to bottom,darkblue,lightsalmon); width: 100%; height: 1000px`}>
    <Layout>
      <Router>
        <PrivateRoute path="/account/profile" component={Profile} />
        <PrivateRoute path="/account/execute" component={PostToPython} />
      </Router>
      <RestrictPage />
    </Layout>
  </div>
)

export default Account