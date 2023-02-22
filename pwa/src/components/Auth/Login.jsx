import {useContext, useState} from "react";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import AuthContext from "../../context/AuthProvider";

function Login() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const setTokens = useLocalStorage('tokens', {})[1];
    const {setAuth} = useContext(AuthContext);

    async function handleLogin() {
        const response = await fetch('http://localhost:8000/api/v1/token/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })

        const token = await response.json();
        setTokens({access: token.access, refresh: token.refresh});
        setAuth(token);
    }


    return (
        <>
            <div>
                <h2>Login</h2>

                <input
                    type="text" placeholder={'email'}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    type="password" placeholder={'password'}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <button type='button' onClick={handleLogin}>Login</button>
            </div>
        </>
    )
}

export default Login;