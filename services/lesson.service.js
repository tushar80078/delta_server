const db=require("../lib/db")

/**get all lesson */

const getAllLessonsData=async()=>{
    const allLessonData=await db.courseLessons.findMany()
     return allLessonData
}

/** get lesson by lesson name */
const getLessonByName=async({name})=>{
    const isLessonExist= await db.courseLessons.findFirst({
        where:{
            lessonName:name
        }
    })
    return isLessonExist
}

/* Create Lesson */

const createLesson=async(data)=>{

    const createLesson=await db.courseLessons.create({
        data:{
            ...data
        }

    })
    console.log(createLesson);
    
    return createLesson
}

/*  get chapter by id */

const getLessonById=async({lessonId})=>{
    const getlessonResponse= await db.courseLessons.findFirst({
        where:{
            id:lessonId
        }
    })

    return  getlessonResponse
}

module.exports={
    getLessonByName,
    createLesson,
    getLessonById,
    getAllLessonsData

}