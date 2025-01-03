// ------------------ Swagger Defination ------------------

exports.defination ={
    createStudentRequest :{
        required : ["firstname","student_mobile_no","email_address","qualification","education","institute_name","status","profile_photo","password"],
        properties :{
            firstname:{
                type:"string",
                example:"John"
            },
            lastname:{
                type:"string",
                example:"Doe"
            },
            address:{
                type:"string",
                example:"Doe"
            },
            student_mobile_no:{
                type:"string",
                example:"1234567890"
            },
            parent_mobile_no:{
                type:"string",
                example:"1234567890"
            },
            gender:{
                type:"string",
                example:"male/female/other"
            },
            email_address:{
                type:"string",
                example:"john_doe@gmail.com"
            },
            dob:{
                type:"date",
                example:"2023-09-01T15:30:00.000Z"
            },
            qualification:{
                type:"string",
                example:"secondary_school/higher_secondary/junior_college/under_graduate/graduate/post_graduate/other"
            },
            education:{
                type:"string",
                example:"B.E(Computer Science)"
            },
            institute_name:{
                type:"string",
                example:"MIT College"
            },
            status:{
                type:"string",
                example:"active/inactive"
            },
            profile_photo:{
                type:"string",
                example:"publicly_available_user_image_link.png/jpg/jpeg"
            },
            password:{
                type:"string",
                example:"Abc12345*"
            },
        },
    }
}

 // ------------------- Swagger Paths -------------------------------


exports.path ={
    "/student/createStudent":{
        post : {
            tags : ["Student"],
            operationId : "createStudent",
            summary : "Add Student",
            description : "Add Student",
            security : [{JWT : []}],
            parameters : [
                {
                    name : "student",
                    required : true,
                    in : "body",
                    type : "object",
                    description : "Student Information.",
                    schema : {
                        $ref: "#/defination/createStudentRequest"
                    }
                }
            ],
            responses : {
                200 : {
                    description :"New Student Created SuccessFully!!!",
                    schema : {
                        // Not cleared yet
                    }
                }
            }
        }
    }
}