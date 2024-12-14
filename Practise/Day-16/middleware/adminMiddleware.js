
// check for user is admin or not

const isAdminUser = (req, res, next) => {
   
    if (req.userInfo.role !== "admin") {
       
        return res.status(403).json({
            success: false,
            message: 'Access Denied, not a admin..'
        });
   
    }
    next()
};

module.exports = isAdminUser;