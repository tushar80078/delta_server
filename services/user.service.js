const db = require("../lib/db")


const getUserByEmailId = async ({ email, showPassword = false }) => {
    const userResponse = await db.user.findFirst({
        where: {
            email: email,
            isDeleted: false,
        },
        select: {
            password: showPassword,
            email: true,
            gender: true,
            courses: true,
            createdAt: true,
            firstName: true,
            id: true,
            lastName: true,
            profileImage: true,
            role: true,
            updatedAt: true
        }
    });

    return userResponse;
};

module.exports = {
    getUserByEmailId
}