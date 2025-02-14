const authHelper = require("../helper/functions/authHelpers");
const { getUserByEmailId, postCreateUserAccountService } = require("../services/user.service");


/* Login Users */
exports.postUserLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

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

/* Signup User */
exports.postUserSignup = async (req, res, next) => {
    try {
        const { firstName, lastName, email, password, role, gender } = req.body;

        let isUserExist = await getUserByEmailId({ email, showPassword: false });

        if (isUserExist) {
            return next({
                statusCode: 409,
                message: `User already registered with given name. Please enter another Email.`,
            });
        }

        const hashPassword = await authHelper.hashPassword(password);

        const accountResponse = await postCreateUserAccountService({ firstName, lastName, email, password: hashPassword, role, gender });


        const tokenObject = {
            id: accountResponse.id,
            roleName: accountResponse.role,
            email: accountResponse.email
        };

        const jwtToken = await authHelper.createToken(tokenObject);

        return res.status(200).json({
            success: true,
            msg: 'Account Created Successfully!',
            data: {
                token: jwtToken,
                userData: accountResponse,
            },
        })


    } catch (error) {
        return next(error);
    }
};