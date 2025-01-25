const { z } = require("zod");

/*Login Schema */

const loginSchema = z.object({
    email: z.string(),
    password: z.string(),
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
const createCourseLessonSchema=z.object({
    lessonName:z.string(),
    sequenceNumber:z.number()

})

/* get lessons */

const getCourseLessonsByPagination=z.object({
    page:z.number(),
    pageSize:z.number()

})
/* Get lesson by id */
const getLessonByID = z.object({
    lessonId: z.string(),
});




module.exports = {

    course: {
        loginSchema,
        createCourseSchema,
        getCourseSchema,
        getCourseByID
    },

    category: {
        createCategorySchema,
        getCategoriesByPagination
    },
    lesson:{
        createCourseLessonSchema,
        getCourseLessonsByPagination,
        getLessonByID
    }
};
