import React from 'react'

export const FooBarForm = () => {

    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
  
    const handleSubmit = () => {
      console.log(usernameRef.current.value, passwordRef.current.value);
    };
  
    return (
      <div>
        <br />
        <label>Username <input ref={usernameRef} /></label>
        <br />
        <label>Password <input ref={passwordRef} /></label>
        <br /><br/>
        <button onClick={handleSubmit}>Submit-1</button>
      </div>
    );
  };
