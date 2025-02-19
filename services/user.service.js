const db = require("../lib/db")


/* Get user by email id */
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
            cartCourses: true,
            enrolledClubCourses: {
                where: {
                    isDeleted: false,
                    isPublished: true,
                    enrolledUsers: {
                        some: {
                            email: email
                        }
                    }
                }
            },
            enrolledCourses: {
                where: {
                    isDeleted: false,
                    isPublished: true,
                    enrolledUsers: {
                        some: {
                            email: email
                        }
                    }
                }
            },
            createdCourses: true,
            createdAt: true,
            firstName: true,
            id: true,
            lastName: true,
            profileImage: true,
            role: true,
            updatedAt: true
        }
    });



    if (userResponse?.role === "Teacher") {
        delete userResponse.enrolledCourses;
        delete userResponse.enrolledClubCourses
        delete userResponse.cartCourses
    } else if (userResponse?.role === "Student") {
        delete userResponse.createdCourses;
    }

    return userResponse;
};

/* Create user account */

const postCreateUserAccountService = async ({ firstName, lastName, email, password, role, gender }) => {
    const userResponse = await db.user.create({
        data: {
            email,
            password,
            firstName,
            gender,
            lastName,
            role,
        },
        select: {
            password: false,
            email: true,
            gender: true,
            createdAt: true,
            firstName: true,
            id: true,
            lastName: true,
            profileImage: true,
            role: true,
            updatedAt: true
        }
    })

    return userResponse;
};



module.exports = {
    getUserByEmailId,
    postCreateUserAccountService
}