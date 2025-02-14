const { z } = require("zod");

// Auth

/*Login Schema */

const loginSchema = z.object({
    email: z.string(),
    password: z.string(),
});

const signUpSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    password: z.string(),
    gender: z.string(),
    role: z.string()
});

// Courses

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

/* Get course by id */
const getCourseByID = z.object({
    courseId: z.string(),
});

// Category

/* Create Category */
const createCategorySchema = z.object({
    category: z.string(),
});

const getCategoriesByPagination = z.object({
    page: z.number(),
    pageSize: z.number(),
})

// Lessons
/* create course lesson */
const createCourseLessonSchema = z.object({
    lessonName: z.string(),
    courseId: z.string(),
})

/* get lessons */

const getCourseLessonsByPagination = z.object({
    page: z.number(),
    pageSize: z.number(),
    courseId: z.string(),
})
/* Get lesson by id */
const getLessonByID = z.object({
    lessonId: z.string(),
});

/* Students */
const postAddCourseToCart = z.object({
    userId: z.string(),
    courseId: z.string()
})




module.exports = {

    auth: {
        loginSchema,
        signUpSchema
    },

    course: {
        createCourseSchema,
        getCourseSchema,
        getCourseByID
    },

    category: {
        createCategorySchema,
        getCategoriesByPagination
    },
    lesson: {
        createCourseLessonSchema,
        getCourseLessonsByPagination,
        getLessonByID
    },

    students: {
        postAddCourseToCart
    }
};
