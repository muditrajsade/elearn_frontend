import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createSearchParams } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import './create_account.css';

function Create_account(){
    let n = useNavigate();

    let [name,set_name] = useState('');

    let [email,set_email] = useState('');

    let [pwd,set_pwd] = useState('');

    let change_name = (e)=>{
        set_name(e.target.value);
    }

    let change_email = (e)=>{
        set_email(e.target.value);
    }

    let change_pwd = (e)=>{
        set_pwd(e.target.value);
    }
    

    let crtacc = async ()=>{

        let r = {full_name : name, email : email, pwd : pwd};

        let res = await fetch("http://localhost:8000/create_account",{
            method:"POST",
            headers:{'content-type': 'application/json'},
            body:JSON.stringify(r),

        });

        console.log(res);

        n({
            pathname:'/vid_upload',
            search: createSearchParams({
                full_name:name,
                

                
                

            }).toString()
        })}

    return (
        <div className="container">
            <div className="left-side">
                <h1>eLearn</h1>
                <p>Create an account to start learning</p>
            </div>
            <div className="right-side">
                <Box className="box" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField id="outlined-basic" onChange={change_name} label="NAME" variant="filled" fullWidth />
                    <TextField id="filled-basic" onChange={change_email} label="EMAIL" variant="filled" fullWidth />
                    <TextField id="standard-basic" onChange={change_pwd} label="PASSWORD" variant="filled" type="password" fullWidth />
                    <Button onClick={crtacc} variant="contained" fullWidth>Sign Up</Button>
                </Box>
            </div>
        </div>
    );
}

export default Create_account;