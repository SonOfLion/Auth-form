import React, { useState } from 'react';
import LoginForm from './LoginForm';


const App = () => {
    const adminUser = {
        name:'admin',
        password:'admin'
    };

    const[user,setUser] = useState({name:'',password:''})
    const[error,setError] = useState('');


    const isLoggedIn = details => {
        console.log(details)
    }

    const logout = () => {
        console.log('logout')
    }

    return (
        <form className="app">
            {(user.name !== '') ? (
                <div className="welcome">
                    <h2>Welcome<span>{user.name}</span></h2>
                    <button >Logout</button>
                </div>
            ) : <LoginForm isLoggedIn={isLoggedIn} error={error}/>}
        </form>
    )
}

export default App;