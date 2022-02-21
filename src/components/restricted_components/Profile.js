import { Link } from "@reach/router";
import React from "react"
import { useAuth0 } from "../../utils/authentication";
import "../styles/UserProfile.css"
import { PreLoader } from "../Button";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <PreLoader />
  }

  return(
    <>
        <center class="card profile-card-5">
          <center class="card-img-block">
              <img class="card-img-top"
              src={user.picture? user.picture :
                "https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"}
              alt={user.name}
              width={"200px"}/>
          </center>
          <center class="card-body pt-0">
            <h5 class="card-title">{user.name === user.email? "Email: " + user.email : user.name}</h5>
            <p class="card-text">
              This is some sample text which is built on User Profile card.
            </p>
            <br></br>
            <Link to="#" class="btn">Edit Profile</Link>
            <br></br>
          </center>
        </center>
    </>
  )
}

export default Profile