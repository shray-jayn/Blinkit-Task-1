const multer = require('multer');

// Configure multer for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + file.originalname);
    },
});

const upload = multer({ storage: storage });

module.exports = {
    singleUpload: upload.single('image'),
};
