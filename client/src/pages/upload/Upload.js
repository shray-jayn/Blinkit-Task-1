import React, { useState } from 'react';
import './Upload.css'; // Assuming you have a CSS file for styling

const Upload = () => {
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('File to upload:', file);
        // Here you would add your logic to handle the file upload (e.g., API call)
    };

    return (
        <div className="upload-form">
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default Upload;
