const db=require("../lib/db")
const { createLesson ,getLessonByName,getLessonById ,getAllLessonsData} = require("../services/lesson.service")

// get all lessons
exports.getAllLessons=async(req,res,next)=>{
    
    try {

        const  alllessons=await getAllLessonsData()
        if(alllessons){
            return res.status(200).json({
                success:true,
                message:"Lessons Fetched",
                data:alllessons
            })
        }
        return res.status(404).json({
            success:false,
            message:"No data Found"

        })


        res.json({
            message:"getAllLessons"
        })
        
        
    } catch (error) {
        return next(error)
        
    }

}
/* Create lesson */
exports.postCreateLesson=async(req,res,next)=>{
    
    try {
        const isLessonNameExist= await getLessonByName(req.body.lessonName)
        if (isLessonNameExist) {
          return  res.json({
                success:false,
                message:"Lesson name Already Existed"
            })
            
        }

        const payloadData={
            ...req.body,
            isFree:req.body.isFree ===  true

        }
        const createLessonResponse= await createLesson({...payloadData,tokenData:undefined})
       
        res.status(200).json({
            success:true,
            message:"Lesson Created Successfully",
            data:createLessonResponse
        })
        
        
    } catch (error) {
        return next(error)
        
    }

}

// get lesson with pagination
exports.getAllCourseLessonsByPagination=async(req,res,next)=>{
    try {
        res.json({
            message:"getAllCourseLessonsByPagination"
        })
        
        
    } catch (error) {
        return next(error)
        
    }

}

//get lesson by id

exports.getLessonByID=async(req,res,next)=>{
    try {
        const {lessonId}=req.params

        const getLessonResponse=await getLessonById({lessonId})
        console.log(getLessonResponse);
        if(getLessonResponse){
            return res.status(200).send({
                success:true,
                messgae:"Lesson Fetched Successfully",
                data:getLessonResponse
            })
            
        }
        return res.status(404).send({
            success:false,
            messgae:"thid id lesson not present",
        })
        

        
    } catch (error) {
        next(error)
        
    }
}

