

// check url/api for versioning
const urlVersioning = (version) => (req, res, next) => {
    if (req.path.startsWith(`/api/${version}`)) {
        next();
    }
    else {
        res.status(404).json({
            success: false,
            error: 'Api Version is not Supported',
        });
    }
}

// check header for versioning

const headerVersion = (version) => {
    if (req.get('Accept-Version') === version) {
        next();
    }
    else {
        res.status(404).json({
            success: false,
            error: 'Api Version is not Supported',
        });
    }
}

// application/json --> application/ api.vnd.v1


const contentVersion = (version) => {
    const contentType = req.get('Content-Type');
    if (contentType && contentType.include(`application/vnd.api.${version}+json`)) {
        next();
    }
    else {
        res.status(404).json({
            success: false,
            error: 'Api Version is not Supported',
        });
    }
}



module.exports = {
    urlVersioning,
    headerVersion,
    contentVersion
}