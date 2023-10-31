import React, { useState } from "react"

const Form= props=>{
    const [firstName, setFirstName]= useState("");
    const [lastName, setLastName]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [confirmPassword, setConfirmPassword]= useState("");
    const [errorFirstName, setErrorFirstName]= useState("")
    const [errorLastName, setErrorLastName]= useState("")
    const [errorEmail, setErrorEmail]= useState("")
    const [errorPassword, setErrorPassword]= useState("")
    const [errorConfirmPassword, setErrorConfirmPassword]= useState("")


    const handleForm= (e)=>{
        e.preventDefault

    }
    const handleFirstName=(e)=>{
        setFirstName(e.target.value);
        if(e.target.value.length<1){
            setErrorFirstName("Enter First Name")
        }
       else if (e.target.value.length<2){
            setErrorFirstName("First name must be at least 2 characters long")
        }else{
            setErrorFirstName("")
        }
    }

    const handleLastName=(e)=>{
        setLastName(e.target.value);
        if (e.target.value.length<1){
            setErrorLastName("Enter last name")
        }else if(e.target.value.length<2){
            setErrorLastName("Last name must be at least 2 characters long")
        }else{
            setErrorLastName("")
        }
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value);
        if(e.target.value.length<1){
            setErrorEmail("Enter your email")
        }
        else if (e.target.value.length<5){
            setErrorEmail("Email must be at least 5 characters long")
        }else{
            setErrorEmail("")
        }
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value);
        if(e.target.value.length<1){
            setErrorPassword("Enter a Password")
        }
        else if (e.target.value.length<8){
            setErrorPassword("Last name must be at least 8 characters long")
        }else{
            setErrorPassword("")
        }
    }
    const handleConfirmPassword=(e)=>{
        setConfirmPassword(e.target.value);
        if (e.target.value!=password){
            setErrorConfirmPassword("Passwords don't match!")
        }else{
            setErrorConfirmPassword("")
        }
    }


        return(
            <>
            <form onSubmit={ handleForm}>
                
                <div>
                    <label >First Name: </label>
                    <input type="text" value={firstName} onChange={handleFirstName}/>
                    {
                        errorFirstName?
                        <p>{errorFirstName}</p>: ""
                    }
                </div>
                <div>
                    <label >Last Name: </label>
                    <input type="text" value={lastName} onChange={handleLastName}/>
                    {
                        errorLastName?
                        <p>{errorLastName}</p>: ""
                    }
                </div>
                <div>
                    <label >Email: </label>
                    <input type="text" value={email} onChange={handleEmail}/>
                </div>
                {
                    errorEmail?
                    <p>{errorEmail}</p>: ""
                }
                <div>
                    <label >Password: </label>
                    <input type="password" value={password} onChange={handlePassword}/>
                </div>
                {
                    errorPassword?
                    <p>{errorPassword}</p>: ""
                }
                <div>
                    <label >Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={handleConfirmPassword}/>
                </div>
                {
                    errorConfirmPassword?
                    <p>{errorConfirmPassword}</p>: ""
                }
                <button>Submit</button>
            </form>
           
            </>
        )
    }


export default Form