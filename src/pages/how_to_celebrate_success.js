import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"


const HowToCelebrateSuccess = () => (
    <body css={`background:darkcyan; width: 100%; height: 1000px`}>
        <Layout>
            <h1>Hi Slack Team, this is How to celebrate Success page</h1>
            <Link to="/"> Go To Home Page </Link>
        </Layout>
    </body>
)

export default HowToCelebrateSuccess