import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const[account,setAccount] = useState('');
    const[password,setPassword] = useState('');

    const handleRequest  = () => {
        return  axios.get('https://addpi.cloudareus.com:8080/')
        .then(res => console.log(res))
    }


    const handleChangeAcc = (e) => {
        setAccount(e.target.account)
    }
    
    const handleChangePass = (e) => {
        setPassword(e.target.password)
    }

    return (
        <div className="login-form">
            <input
                placeholder="Enter youre login"
                className="login-form__input"
                type="text"
                value={account}
                onChange={handleChangeAcc}
            >
            </input>
            <input
                placeholder="Enter youre password"
                className="login-form__input"
                type="password"
                value={password}
                onChange={handleChangePass}
            >
            </input>
            <button 
                className="login-form__btn"
                onClick={handleRequest}
            >Login</button>
        </div>
    )
}


export default LoginForm;