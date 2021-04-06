import React,{ useState } from 'react';
// import axios from 'axios';

const LoginForm = ({ isLoggedIn, error }) => {
    const[description,setDescription] = useState({name: '', password:''})
    
    const handleOnSubmit = e => {
        e.preventDefault();

        isLoggedIn(description);
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <div className="form-inner">
                <h2>Login</h2>
                <div className="from-group">
                    <label className="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDescription({...description, name:e.target.value})}/>
                </div>
                <div className="from-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <input type="submit" value="Login"/>
            </div>
        </form>
    )
}

export default LoginForm;

{/* <input
placeholder="Enter youre login"
className="login-form__input"
type="text"

>
</input>
<input
placeholder="Enter youre password"
className="login-form__input"
type="password"
>
</input>
<button 
className="login-form__btn"

>Login</button> */}