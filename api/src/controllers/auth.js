const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User with this email already exists",
            });
        }

        // Register the user
        const encryptedPassword = CryptoJS.AES.encrypt(
            password,
            process.env.SECRET_KEY_FOR_CRYPTOJS
        ).toString();

        const newUser = await User.create({
            username,
            password: encryptedPassword,
            email,
        });

        // Generate access token for the newly registered user
        const accessToken = generateAccessToken(newUser);

        res.status(201).json({
            success: true,
            user: newUser,
            accessToken,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            errorMessage: error.message,
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        // If user is not found or password is incorrect
        if (!user || decryptPassword(user.password) !== password) {
            return res.status(401).json({
                success: false,
                message: "Incorrect email or password",
            });
        }

        // Creating a jwt token for the user that has been found
        const accessToken = generateAccessToken(user);

        // Return user details along with the access token
        const { password: userPassword, ...userInfo } = user._doc;
        res.status(200).json({ ...userInfo, accessToken });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            errorMessage: error.message,
        });
    }
};

// Helper function to decrypt password
const decryptPassword = (encryptedPassword) => {
    const bytes = CryptoJS.AES.decrypt(
        encryptedPassword,
        process.env.SECRET_KEY_FOR_CRYPTOJS
    );
    return bytes.toString(CryptoJS.enc.Utf8);
};

// Helper function to generate access token
const generateAccessToken = (user) => {
    return jwt.sign(
        { id: user._id },
        process.env.SECRET_KEY_FOR_CRYPTOJS,
        { expiresIn: "30d" }
    );
};

module.exports = {
    registerUser,
    loginUser,
};
