# Image Upload Web Application

This web application enables users to register, log in, and securely upload images. The frontend is developed using ReactJS for an interactive user interface, while the backend utilizes Node.js with Express.js for server-side logic. User data is stored in MongoDB, and authentication is implemented through JWT (JSON Web Tokens). Multer is employed to handle image uploads.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- MongoDB
- Multer
- React.js

## Features

- **User Authentication**: Allows users to sign up and log in securely.
- **Password Security**: Utilizes crypto.js for secure password storage.
- **JWT Session Management**: Implements JSON Web Tokens for authenticated session management.
- **Image Upload Functionality**: Enables users to upload images securely using Multer.
- **Responsive ReactJS Frontend**: Provides a responsive and dynamic user interface.

## Endpoints

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Log in a user.
- `POST /api/image/upload`: Upload an image (authenticated route).

## Security

The application prioritizes security with the following measures:

- **Password Hashing**: Passwords are securely hashed using crypto.js.
- **JWT Authentication**: Implements JSON Web Tokens for secure user authentication.

## Getting Started

## Usage

1. **Sign Up / Log In**: Create a new account or log in with existing credentials.
2. **Image Upload**: Upload images securely using the designated functionality.
3. **Explore**: Navigate through the application's features and enjoy a seamless user experience.

## Technologies Used

- React
- Redux
- React Router
- Axios
- Node.js
- Express.js
- MongoDB
- Multer
- JSON Web Tokens (JWT)
