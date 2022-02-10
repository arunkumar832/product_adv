import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import PostToPython from "../components/PostToPython"


const ContactUs = () => (
    <div css={`background:darkcyan; width: 100%; height: 1000px`}>
        <Layout>
            <h1>Hi Slack Team, this is Login page</h1>
            <h4>Here credentials are validated in the backend and gives us response using APIs</h4><br />
            <Link to="/"> Go To Home Page </Link>
            <PostToPython />
        </Layout>
    </div>
)

export default ContactUs