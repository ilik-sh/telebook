const ApiError = require('../error/ApiError')

module.exports = function(err, req, res, next) {
    if (err instanceof ApiError) {
        return res.status(err.status).json({errors: err})
    }
    return res.status(500).json({errors: err})
}