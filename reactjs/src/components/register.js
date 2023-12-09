import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AuthUser from './AuthUser';

export default function Register() {
    const navigate = useNavigate();
    const { http } = AuthUser();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = () => {
        // api call
        http.post('/register', { name: name, email: email, password: password })
            .then((res) => {
                navigate('/login');
            })
            .catch((error) => {
                console.error("Registration failed:", error);
                // Handle registration error if needed
            });
    }

    return (
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <h1 className="text-center mb-4">Register</h1>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" className="form-control" placeholder="Enter name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            id="name" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            id="email" />
                    </div>

                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            id="pwd" />
                    </div>
                    <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Register</button>
                    <div className="text-center mt-3">
                        <p>Already have an account? <a href="/login">Login</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
