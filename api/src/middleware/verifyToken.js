const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json("You are not authenticated!");
    }

    const token = authHeader.split(" ")[1]; // Bearer <token>

    if (!token) {
        return res.status(403).json("Token is not provided!");
    }

    jwt.verify(token, process.env.SECRET_KEY_FOR_CRYPTOJS, (err, user) => {
        if (err) {
            console.error(err);
            return res.status(403).json("Token is not valid!");
        }

        req.user = user;
        next();
    });
};

module.exports = verifyToken;
