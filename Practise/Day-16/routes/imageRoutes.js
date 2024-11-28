const express = require('express');
const authMiddleware = require('../middleware/authMiddleware.js')
const adminMiddleware = require('../middleware/adminMiddleware.js');
const uploadMiddleware = require('../middleware/uploadMiddleware.js');
const { uploadImageController, fetchImageController } = require('../controllers/imageController.js')
const router = express.Router();

// upload Image
router.post('/upload',
    authMiddleware,
    adminMiddleware,
    uploadMiddleware.single('image'),
    uploadImageController,
)

// get all image
router.get('/get', authMiddleware, fetchImageController)


module.exports = router;

