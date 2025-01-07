const authHelper = require("../helper/functions/authHelpers");
const { getUserByEmailId } = require("../services/user.service");

exports.postUserLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return next({
                statusCode: 400,
                message: `Please Send Proper Data With Proper Keys. (Required fields with keys -  email, password)`,
            });
        }

        let isUserExist = await getUserByEmailId({ email, showPassword: true });

        if (!isUserExist) {
            return next({
                statusCode: 409,
                message: `Incorrect username!`,
            });
        }


        let validatePassword = await authHelper.validatePassword(
            password,
            isUserExist.password,
        );

        if (validatePassword) {
            const tokenObject = {
                id: isUserExist.id,
                roleName: isUserExist.role,
                email: isUserExist.email
            };

            const jwtToken = await authHelper.createToken(tokenObject);

            return res.status(200).send({
                success: true,
                msg: "User Authenticated Successfully",
                data: {
                    token: jwtToken,
                    userData: { ...isUserExist, password: undefined },
                },
            });
        } else {
            return res.status(401).send({
                success: false,
                err: "Incorrect Username or password",
            });
        }
    } catch (error) {
        return next(error);
    }
};