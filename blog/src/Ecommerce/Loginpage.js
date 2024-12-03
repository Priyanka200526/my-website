import React, { useState } from 'react';
function Loginpage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === '' || password === '') {
            setError('Please enter both username and password');
        } else {
            // Submit the form data to the server
            console.log('Form data submitted:', { username, password });
        }
    };

    return (
        <div className="login-container">
            <h2>Login to Your Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username/Email:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                {error && <div className="error-message">{error}</div>}
                <button type="submit">Login</button>
                <div className='loginpara'>
                    <p class="forgot-password">
                        Forgot Password? <a href="#" class="click-here-link">Click here</a>
                    </p>
                    <p class="register-now">
                        Don't have an account? <a href="#" class="register-now-link">Register Now</a>
                    </p>

                </div>
                <div className="social-media-login">
                    <h3>Login with Social Media</h3>
                    <ul>
                        <li>
                            <a href="#" className="facebook-login">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#" className="google-login">
                                Google
                            </a>
                        </li>
                        <li>
                            <a href="#" className="twitter-login">
                                Twitter
                            </a>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    );
}


export default Loginpage;