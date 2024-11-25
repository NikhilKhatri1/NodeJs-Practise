const Image = require('../models/imageModel.js');
const { uploadToCloudinary } = require('../helpers/cloudinaryHelpers.js')

const uploadImageController = async (req, res) => {
    try {

        // check file is missing in req object
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'Files is required, please upload an Image'
            })
        }

        //upload to cloudinary
        const { url, publicId } = await uploadToCloudinary(req.file.path)

        // store the image urland public id in database
        const newlyUploadedImage = new Image({
            url,
            publicId,
            uploadedBy: req.userInfo.userId
        })

        await newlyUploadedImage.save();

        res.status(201).json({
            success: true,
            message: "Image uploaded successfully",
            image: newlyUploadedImage
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong!'
        })
    }
}


module.exports = {
    uploadImageController,
}