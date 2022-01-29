import React, { useState } from 'react';
import axios from 'axios'
import { Button } from './Button';

export const PostToPython = () => {

    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const [respFromServer, setResp] = useState({"output": "", "data": ""});

    const postToPython = async(e) => {
        const details = {"user": usernameRef.current.value, "password": passwordRef.current.value}
        e.preventDefault()
        const response = await axios.post(`//${window.location.hostname}:4000/save_args`,details)
        if (response.data.error){
            setResp({"output": response.data.error, "data": response.data})
        }
        else{
            setResp({"output": response.data.response, "data": response.data})
        }
    }
    return (
        <div>
            <br />
            <form onSubmit={postToPython}>
                <label>Username: <input ref={usernameRef} required style={{
                        width: "5cm",
                        padding: "10px 20px",
                        boxSizing: "border-box",
                        border: "none",
                        margin: "8px 0"
                }}/></label>
                <br />
                <label>Password: <input ref={passwordRef} required type="password" style={{
                        width: "5cm",
                        padding: "10px 20px",
                        boxSizing: "border-box",
                        border: "none",
                        margin: "8px 7px"
                }}/></label>
                <br />
                <i>Try with username and password as admin, admin</i><br /><br />
                {respFromServer.output.includes("Successfully") ? 
                <i style={{ color: "greenyellow", fontWeight: "bold" }}>
                    {respFromServer.output}
                </i> :
                <i style={{ color: "maroon", fontWeight: "bold" }}>
                    {respFromServer.output}
                </i>
                }
                <br /><br />
                <Button type="submit" as="button" primary round>Submit-1</Button><br />
            </form>
      </div>
    )
  }

export default PostToPython;
