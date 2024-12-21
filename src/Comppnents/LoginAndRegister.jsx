import React, { useState } from "react";

import './LoginAndRegister.css'

const LoginAndRegister = () => {

    const [action , setAction] = useState('')
    const registerLink = () => {
        setAction('active');
    }

    const loginLink = () => {
        setAction('');
    }

return  (

    <div className={`wrapper ${action}`}>
        <div className="form-box login">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required/>
            
                </div>
                <div className="input-box">
                    <input type="password" placeholder='password' required/>
                            </div>
                            <button type="submit">Login</button>
                 <div className="register-link">
                 <p>
                                Don't have an account?{" "}
                                <a href="#" onClick={registerLink}>
                                    Register
                                </a>
                            </p>

                 
                </div>
                
            </form>
        </div> 




        <div className="form-box register">
            <form action="">
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required/>
            
                </div>

                <div className="input-box">
                    <input type="email" placeholder='Email' required/>
            
                </div>

                <div className="input-box">
                    <input type="password" placeholder='password' required/>
                    </div>
                    <button type="submit">Register</button>
                 <div className="register-link">
                  <p>Already have an account ? <a href="#"onClick={loginLink} > Login</a></p>

                 </div>
                
                
            </form>
        </div> 


    </div>

)

}

export default LoginAndRegister;