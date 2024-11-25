const cloudinary = require("../config/cloudinary")


const uploadToCloudinary = async (filePath) => {
    try {

        const result = await cloudinary.uploader.upload(filePath);
        
        return {
            url: result.secure_url,
            publicId: result.public_id,
        }

    } catch (error) {
        console.log('Error while uploading file to cloudinary', error)
        throw new Error('Error while uploading file')
    }
}

module.exports = {
    uploadToCloudinary
}