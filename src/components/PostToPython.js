import React, { useState } from 'react';
import axios from 'axios'
import ReactiveButton from 'reactive-button';

export const PostToPython = () => {

    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const [respFromServer, setResp] = useState({"output": "", "data": ""});
    const [state, setState] = useState('idle');

    const postToPython = async(e) => {
        setState('loading');
        const details = {"user": usernameRef.current.value, "password": passwordRef.current.value}
        e.preventDefault()
        const response = await axios.post(`https://arcane-falls-54125.herokuapp.com/api/login`, details)
        if (response.data.error){
            setResp({"output": response.data.error, "data": response.data})
            setState('error');
        }
        else{
            setResp({"output": response.data.response, "data": response.data})
            setState('success');
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
                <ReactiveButton
                    color="dark"
                    buttonState={state}
                    idleText={'Login'}
                    loadingText={'Loading'}
                    successText={'Login Success'}
                    errorText={'Error in Login'}
                    type={'submit'}
                    shadow={true}
                    rounded={true}
                    size={'large'}
                    animation={true}
                    width="5cm"
                />
            </form>
      </div>
    )
  }

export default PostToPython;