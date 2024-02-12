const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./src/routes/auth');
const imageRoutes = require('./src/routes/image');
const multerMiddleware = require('./src/middleware/multer');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/image', multerMiddleware.singleUpload, imageRoutes);

module.exports = app;
