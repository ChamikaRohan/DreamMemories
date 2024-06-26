import React, { useState, useEffect } from 'react'
import './SigninPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash  } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import LoadingIcons from 'react-loading-icons'
import {Toaster, toast} from "react-hot-toast"

export default function SigninPage() {
    const apiURL = import.meta.env.VITE_API_BASE_URL;
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [signinmsg,setSigninmsg] = useState();
    const [signinerror,setSigninerror] = useState();
    const [logloading, setLogloading] = useState(false);
   
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const goToSignup = ()=>{
        navigate("/signup");
    };

    const handleLogin = async(e) =>{
        e.preventDefault();
        try{
            setLogloading(true);
            const response = await fetch(`${apiURL}/user/signin`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify({email, password})
            })
            const data = await response.json();
            setLogloading(false);
            if (response.status == 200)
            {
                setSigninmsg(data.message);
                Cookies.set('access_token', `${data.access_token}`, {
                    secure: true,
                    sameSite: 'None'
                  });
                toast.success('Sign-in Successful!',{duration: 1500});
                setTimeout(()=>{
                    navigate("/");
                }, 1800);

            }
            else{
                toast.error('Sign-in Failed!',{duration: 1500});
                toast.error(`${data.error}`,{duration: 1500});
                setSigninerror(data.error);
            }
        }
       catch(error)
       {
         setLogloading(false);
         setSigninerror('There was a problem with the fetch operation:', error);
        }
    }
    
    return (
    <div className="mainContainer">
        <div className="subContainer">
            <label className='topic'>Hello Again!</label>
            <label className='subtopic'>Explore More by <br />connecting with us...</label>
            <form className='form'>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" type="email" />
                <div class="passwordContainer">
                    <input type={showPassword? "text": "password"} className="passwordInput" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <button type="button" className="viewPasswordBtn" onClick={togglePasswordVisibility}>{showPassword? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}</button>
                </div>
                <button className='btn' onClick={handleLogin} style={{display: "flex", alignItems: "center", justifyContent: "center"}} >{logloading? <LoadingIcons.TailSpin  speed={1} height={24} /> : "Let's Go"}</button>
            </form>
            <div className='bottomContainer'>
                <label className='bottomFText' >Not a Member?</label>
                <label className='bottomSText' onClick={goToSignup} >Register now</label>
            </div>
        </div>
        <Toaster position="top-center" reverseOrder={false}/>
    </div>
  )
}
