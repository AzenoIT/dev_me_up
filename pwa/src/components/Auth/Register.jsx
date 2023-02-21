import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleRegistration() {
        const response = await fetch('/api/v1/users/register/', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        await response.json();
        // navigate('/login')
    }

    return (
        <div>
            <h2>Register</h2>

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

            <button type='button' onClick={handleRegistration}>Register</button>
        </div>
    );
}

export default Register;