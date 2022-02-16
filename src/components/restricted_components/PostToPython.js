import React, { useState } from 'react';
import axios from 'axios'
import ReactiveButton from 'reactive-button';
import { useAuth0 } from '../../utils/authentication';
import { MutatingDots } from 'react-loader-spinner';
import styled from 'styled-components';

export const PostToPython = () => {
    const { loading, user } = useAuth0();
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const [respFromServer, setResp] = useState({"output": "", "data": ""});
    const [state, setState] = useState('idle');

    if (loading || !user) {
        return <LoadingSpinner><MutatingDots color="#00BFFF"/></LoadingSpinner>
      }
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
        <SwitchContainer>
            <br />
            <form onSubmit={postToPython}>
                <label>USERNAME: <input ref={usernameRef} required style={{
                        boxShadow: "0 2px 4px 0 black, 0 3px 10px 0 black",
                        width: "5cm",
                        padding: "10px 20px",
                        boxSizing: "border-box",
                        border: "none",
                        margin: "8px 0"
                }}/></label>
                <br />
                <label>PASSWORD: <input ref={passwordRef} required type="password" style={{
                        boxShadow: "0 2px 4px 0 black, 0 3px 10px 0 black",
                        width: "5cm",
                        padding: "10px 20px",
                        boxSizing: "border-box",
                        border: "none",
                        margin: "8px 0 50px"
                }}/></label>
                <br />
                <i>Try with username and password as admin, admin</i><br /><br />
                {respFromServer.output.includes("Successfully") ? 
                <i style={{ color: "green", fontWeight: "bold" }}>
                    {respFromServer.output}
                </i> :
                <i style={{ color: "red", fontWeight: "bold" }}>
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
    </SwitchContainer>
    )
  }

export default PostToPython;

const LoadingSpinner = styled.div`
    display: inline-block;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 3cm;
    right: 0;
    width: 200px;
    height: 100px;
    margin: auto;
`
const SwitchContainer = styled.div`
    background: aquamarine;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 black, 0 6px 20px 0 black;
    display: inline-block;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    right: 0;
    width: 8cm;
    height: 350px;
    margin: auto;
    overflow: visible;
    @media screen and (max-width: 1299px){
        top: 3cm;
    }
    @media screen and (max-width: 1100px){
        top: -8cm;
    }
    @media screen and (max-width: 768px){
        top: 0;
    }
    @media screen and (max-width: 400px){
        top: 2cm;
    }
`