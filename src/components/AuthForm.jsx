import { useState } from "react";

export default function AuthForm({ buttonText, setToken }){
    try {
    const [ username, setUsername] = useState('')
    const [ password, setPassword] = useState('')

    let url=`https://fakestoreapi.com/auth/${buttonText}`;    
    if (buttonText == "register") {
        url=`https://fakestoreapi.com/users`;    
        console.log(buttonText);
        console.log(url);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({                
                    username: username,
                    password: password,
                  }),
        });
        const result = await response.json();
        console.log(result);
        localStorage.setItem("token",result.token);
        setToken(result.token);
        console.log(result.token);

    }
    return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                type="text" 
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <p>
                <label htmlFor="password">Password</label>
                <input 
                type="text" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                </p>
                <button type="submit">{buttonText}</button>
            </form>
    )
    }
    catch (error) {
        console.log(error);
    }
}