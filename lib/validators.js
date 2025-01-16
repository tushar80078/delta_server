const { z } = require("zod");

/*Login Schema */

const loginSchema = z.object({
    email: z.string(),
    password: z.string(),
});

/* Create Course */
const createCourseSchema = z.object({
    courseName: z.string(),
    courseScore: z.string(),
    isFree: z.string(),
});

/* Get Course */
const getCourseSchema = z.object({
    page: z.number(),
    pageSize: z.number(),
    category: z.string(),
});


module.exports = {
    loginSchema,
    createCourseSchema,
    getCourseSchema
};
