import React from "react";
import './entry.style.css';
import {Loginform} from '../../components/login/Login.comp.jsx'
import { useState } from 'react';
import { Resetpassword } from "../../components/password reset/passwordreset.comp.";
export const Entry=()=>{

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [frmload,setFrmload]=useState("login")

    const handleOnchange =e=>{
        const {name,value}=e.target;
        switch(name)
        {
            case'email':
            setEmail(value)
            break
            case'password':
            setPassword(value)
            break;
            default:
                break


        }
        console.log(name,value)

    };
    const handleOnsubmit=e=>{
        e.preventDefault()
        if(!email|| !password)
        {
            return alert("Fill up all the form!");

        }
        console.log(email,password);

    };
     const handleOnresetsubmit=e=>{
        e.preventDefault()
        if(!email)
        {
            return alert("enter the email!");

        }
        console.log(email);

    };
    const formswitcher=frmtype=>{
        setFrmload(frmtype);



    }
    return (
        <div className="entry-page bg-info">
              <div className='jumbotron'>
                  {frmload==='login'&&
<Loginform 
handleOnchange={handleOnchange}
handleOnsubmit={handleOnsubmit}
email={email}
formswitcher={formswitcher}
pass={password}/>}
{frmload==='reset' &&
<Resetpassword
handleOnchange={handleOnchange}
handleOnresetsubmit={handleOnresetsubmit}
formswitcher={formswitcher}
email={email}
pass={password}/>}
</div>
        </div>
    );

};