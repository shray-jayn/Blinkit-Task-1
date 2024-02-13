// Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; 


const Signup = () => {
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate(); // React Router's useNavigate hook

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', user);

            // Check if the registration was successful
            if (response.data.success) {
                console.log('User signed up:', response.data);

                // Update user state in AuthContext
                login(response.data);

                // Redirect to image upload page
                navigate('/upload');
            } else {
                setError(response.data.message || 'Failed to sign up. Please try again.');
            }
        } catch (error) {
            console.error('Error signing up:', error.message);
            setError('Failed to sign up. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signup-form">
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                />
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Signing Up...' : 'Sign Up'}
                </button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default Signup;
