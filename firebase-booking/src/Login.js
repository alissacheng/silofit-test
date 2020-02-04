import React from 'react'

const Login = (props) => {

    return(
    <div>
        <h1>Silofit</h1>
        <form>
        <label for="email">Please eneter your work e-mail address and we'll send you</label>
        <input type="email" id="email"></input>
        <button onClick={()=>{props.handleSubmit(document.getElementById("email").value)}}>Submit</button>
        </form>
    </div>
    )
}

export default Login