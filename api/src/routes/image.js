const express = require('express');
const imageRouter = express.Router();
const imageController = require('../controllers/image');
const verifyToken = require('../middleware/verifyToken');
const { singleUpload } = require('../middleware/multer'); 

imageRouter.post('/upload', verifyToken, singleUpload, imageController.uploadImage);
imageRouter.get('/images', imageController.getAllImages);

module.exports = imageRouter;
