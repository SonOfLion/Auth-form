import React,{ useState } from 'react';
// import axios from 'axios';

const LoginForm = ({ isLoggedIn, error }) => {
    const[description,setDescription] = useState({name: '', password:''})
    
    const handleOnSubmit = e => {
        e.preventDefault();

        isLoggedIn(description);
    }
    return (
        <form className="form" onSubmit={handleOnSubmit}>
            <div className="form__form-inner">
                <h2>Login</h2>
                {(error !== '') ? (<div className="error">{error}</div>) : ''}
                <div className="form-group">
                    <label className="name">Name:</label>
                    <input className="__input"type="text" name="name" id="name" onChange={e => setDescription({...description, name:e.target.value})} value={description.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDescription({...description, password:e.target.value})} value={description.password}/>
                </div>
                <input type="submit" value="Login"/>
            </div>
        </form>
    )
}

export default LoginForm;