import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function handleRegistration() {
        const controller = new AbortController();
        const signal = controller.signal

        const response = await fetch('http://localhost:8000/api/v1/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            }),
            signal
        })

        if (response.status !== 201) {
            console.error('Something went wrong when creating new user');
            console.error(response);
        } else {
            console.log('Created')
        }

        navigate('/login')
        return () => {
            controller.abort();
        }
    }

    return (
        <>
            <div>
                <h2>Register</h2>

                <input
                    type="text" placeholder={'username'}
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
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
        </>
    )
}

export default Register;
