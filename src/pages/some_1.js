import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"


const SomeOne = () => (
    <body css={`background:linear-gradient(to bottom,darkblue,lightsalmon); color: #fff; width: 100%; height: 1000px`}>
        <Layout>
            <h1>Hi Slack Team, this is Some-1 page</h1>
            <Link to="/"> Go To Home Page </Link>
        </Layout>
    </body>
)

export default SomeOne