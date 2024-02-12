const Image = require('../models/Image');

const uploadImage = async (req, res) => {
    try {
        const userId = req.user.id;
        const imageUrl = req.file.filename;
        const description = req.body.description || '';

        const newImage = await Image.create({ userId, imageUrl, description });

        res.status(201).json({
            success: true,
            image: newImage,
            message: 'Image uploaded successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            errorMessage: error.message,
        });
    }
};

const getAllImages = async (req, res) => {
    try {
        const images = await Image.find();

        res.status(200).json({
            success: true,
            images,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            errorMessage: error.message,
        });
    }
};

module.exports = {
    uploadImage,
    getAllImages,
};
