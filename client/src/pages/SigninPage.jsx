import React, { useState, useEffect } from 'react'
import './SigninPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash  } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function SigninPage() {
    const apiURL = import.meta.env.VITE_API_BASE_URL;
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [signinmsg,setSigninmsg] = useState();
    const [signinerror,setSigninerror] = useState();
  
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const goToSignup = ()=>{
        navigate("/signup");
    };

    const handleLogin = async(e) =>{
        e.preventDefault();
        try{
            const response = await fetch(`${apiURL}/user/signin`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify({email, password})
            })
            const data = await response.json();

            if (response.status == 200)
            {
                setSigninmsg(data.message);
                Cookies.set('access_token', `${data.access_token}`);
                navigate("/");

            }
            else{
                setSigninerror(data.error);
            }
        }
       catch(error)
       {
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
                <button className='btn' onClick={handleLogin}>Let's Go</button>
            </form>
            <div className='bottomContainer'>
                <label className='bottomFText' >Not a Member?</label>
                <label className='bottomSText' onClick={goToSignup} >Register now</label>
            </div>
        </div>
    </div>
  )
}
