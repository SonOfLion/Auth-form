import React, { useState } from 'react';
import LoginForm from './LoginForm';

const App = () => {
    const adminUser = {
        name: 'admin',
        password: 'admin'
    };

    const [user, setUser] = useState({ name: '', password: '' })
    const [error, setError] = useState('');


    const isLoggedIn = details => {
        if (details.name === adminUser.name && details.password === adminUser.password) {
            setUser({
                name: details.name,
                password: details.password,
            })
        }
        setError("You entered wrong password!")
    }

    const logout = () => {
        setUser({ name: '', password: '' })
    }

    return (
        <div className="app">
            {(user.name !== '') ? '' : (<LoginForm isLoggedIn={isLoggedIn} error={error} />)}
        </div>
    )
}

export default App;

// (user.name !== '') ? (
//     <div className="welcome">
//         <h2>Welcome&ensp;<span>{user.name}</span></h2>
//         <button 
//             onClick={logout}
//         >
//             Logout
//         </button>
//     </div>
// ) : <LoginForm 
//         isLoggedIn={isLoggedIn} 
//         error={error}
//     />