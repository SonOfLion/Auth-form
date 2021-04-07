import React, { useState } from 'react';
import { handleRequest, handleReq } from './gateWay';

const baseUrl = 'https://addpi.cloudareus.com:8080/';

const LoginForm = ({ isLoggedIn, error }) => {
    const [description, setDescription] = useState({ name: '', password: '' });

    // function saveToken(token) {
    //     sessionStorage.setItem('tokenData', JSON.stringify(token));
    // }

    // function getTokenData(login, password) {
    //     return fetch(`${baseUrl}`, {
    //         method: 'POST',
    //         credentials: 'include',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             username: "admin",
    //             password: "admin",
    //         }),
    //     })
    //         .then((res) => {
    //             if (res.status === 200) {
    //                 const tokenData = res.json();
    //                 saveToken(JSON.stringify(tokenData)); // сохраняем полученный токен в sessionStorage, с помощью функции, заданной ранее
    //                 return Promise.resolve()
    //             }
    //             return Promise.reject();
    //         });
    // }



    const handleOnSubmit = e => {
        e.preventDefault();

        isLoggedIn(description);
    }

    return (
        <form
            className="form"
            onSubmit={handleOnSubmit}
        >
            <div className="form__form-inner">
                <h2>Login</h2>
                {(error !== '') ? (<div className="error">{error}</div>) : ''}
                <div className="form-group">
                    <label className="name">Name:</label>
                    <input
                        className="__input"
                        type="text"
                        name="name"
                        id="name"
                        onChange={e => setDescription({ ...description, name: e.target.value })}
                        value={description.name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={e => setDescription({ ...description, password: e.target.value })}
                        value={description.password}
                    />
                </div>
                <input
                    type="submit"
                    value="Login"
                    onClick={handleRequest}
                />
                <button
                    className="btn"
                    onClick={handleReq}
                >Show</button>
            </div>
        </form>
    )
}

export default LoginForm;