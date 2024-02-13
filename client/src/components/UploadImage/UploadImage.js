import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../AuthContext';
import './UploadImage.css'; 

const UploadImage = () => {
    const { user } = useAuth(); // Using the return value of useAuth hook
    const [image, setImage] = useState(null);

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('image', image);

            const token = localStorage.getItem('token');
            if (!token) {
                console.error('JWT auth token not found');
                return;
            }

            const headers = {
                'Content-Type': 'multipart/form-data',
                Authorization: token,
            };

            await axios.post('http://localhost:5000/api/image/upload', formData, {
                headers,
            });

            console.log('Image uploaded successfully');
        } catch (error) {
            console.error('Error uploading image:', error.message);
        }
    };

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <div className="upload-form">
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload Image</button>
        </div>
    );
};

export default UploadImage;
