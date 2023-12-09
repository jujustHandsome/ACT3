import { useState } from "react";
import AuthUser from './AuthUser';

export default function Login() {
    const { http, setToken } = AuthUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = () => {
        // api call
        http.post('/login', { email: email, password: password })
            .then((res) => {
                setToken(res.data.user, res.data.access_token);
            })
            .catch((error) => {
                console.error("Login failed:", error);
                // Handle login error if needed
            });
    }

    return (
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <h1 className="text-center mb-4">Login</h1>
                    <div className="form-group">
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
                    <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Login</button>
                    <div className="text-center mt-3">
                        <a href="#">Forgot Password?</a>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <p>Don't have an account? <a href="#">Sign Up</a></p>
                </div>
            </div>
        </div>
    )
}
