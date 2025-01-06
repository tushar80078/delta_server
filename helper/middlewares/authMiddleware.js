const jwt = require("jsonwebtoken");
const config = require("../config/config");

const auth = async (req, res, next) => {
    try {

        if (req.header("Authorization")) {
            const token = req.header("Authorization").replace("Bearer ", "");
            const decoded = jwt.verify(token, config.auth.secret);

            try {
                req.body.tokenData = decoded.data;
            } catch (error) {
                throw {
                    statusCode: 502,
                    message:
                        "Something went wrong while accessing admin information from JSON web token",
                };
            }
        } else {
            throw { statusCode: 401, message: "Unauthorize user." };
        }
        return next();
    } catch (error) {
        console.error(error);
        return res.status(401).send({ success: false, msg: error.message });
    }
};

module.exports = auth;
