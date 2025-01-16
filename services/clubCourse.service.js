const db = require("../lib/db")

/* Get Club Course By Name */
const getClubCourseByName = async ({ name }) => {
    const isClubCourseExist = await db.clubCourse.findFirst({
        where: {
            clubCourseName: name
        }
    })

    return isClubCourseExist;
}


module.exports = {
    getClubCourseByName
}