import React from "react"
import { useAuth0 } from "../../utils/authentication";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return(
    <center css={`
      position: relative; left: 0%; top: 200px; font-size: 40px;
      @media screen and (max-width: 768px){
          position: relative; left: 0%; top: 150px; font-size: 20px;
      }
    `}>
      <table css={`
        border: double;
        text-align-last: center
      `}>
        <caption css={`border: double`}>Your Profile</caption>
        <tbody>
          <tr>
            <td>Name: </td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Email: </td>
            <td>{user.email}</td>
          </tr>
        </tbody>
      </table>
    </center>
  )
}

export default Profile