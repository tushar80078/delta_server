// ------------------ Swagger Definition ------------------

exports.defination = {


    // ----------- Create Course Request Starts --------------------
    createCourseRequest : {
      required: ["name", "fees", "course_description","course_score","has_project","has_residency","couse_image_link","publish"],
      properties: {
        name: {
          type: "string",
          example: "Frontend In React",
        },
        fees: {
          type: "decimal",
          example: 12000.20,
        },
        course_description: {
          type: "string",
          example: "Best Course For Begginners",
        },
        course_score: {
            type: "decimal",
            example: 0 ,
        },
        has_project: {
            type: "Boolean",
            example: true,
        },
        has_residency:{
            type: "Boolean",
            example: false,
        },
        couse_image_link:{
            type: "string",
            example: "course_image_link",
        },
        publish:{
          type:"boolean",
          example : "false"
        }
      },
      securityDefinitions: {
        JWT: {
          type: "apiKey",
          name: "Authorization",
          in: "header",
        },
      },
    },//=> Create Course Request Ends
   
     // ----------- GetAllCourses Course Request Starts --------------------
    getAllCoursesRequest : {
      properties:{
        securityDefinitions: {
          JWT: {
            type: "apiKey",
            name: "Authorization",
            in: "header",
          },
        },
      }
    }, //=> Update Course Request Ends

    // ----------- Update Course By Id Request Starts --------------------
    updateCoruseByIdRequest : {
      required: [],
      properties: {
        name: {
          type: "string",
          example: "Frontend In React",
        },
        fees: {
          type: "decimal",
          example: 12000.20,
        },
        course_description: {
          type: "string",
          example: "Best Course For Begginners",
        },
        course_score: {
            type: "decimal",
            example: 0 ,
        },
        has_project: {
            type: "Boolean",
            example: true,
        },
        has_residency:{
            type: "Boolean",
            example: false,
        },
        couse_image_link:{
            type: "string",
            example: "course_image_link",
        },
        publish:{
          type:"boolean",
          example : "false"
        }
      },
      securityDefinitions: {
        JWT: {
          type: "apiKey",
          name: "Authorization",
          in: "header",
        },
      },
    }, //=> Update Course Request Ends

    // ----------- Delete Course By Id Request Starts --------------------
    deleteCourseByIdRequest : {
      properties:{
        securityDefinitions: {
          JWT: {
            type: "apiKey",
            name: "Authorization",
            in: "header",
          },
        },
      }
    }, //=> Delete Course By Id Request Ends

     // ----------- Get Course By Id Request Starts --------------------
     getCourseByIdRequest : {
      properties:{
        securityDefinitions: {
          JWT: {
            type: "apiKey",
            name: "Authorization",
            in: "header",
          },
        },
      }
    }, //=> Get Course By Id Request Ends
 
};
  
  // ------------------- Swagger Paths -------------------------------
  
  exports.path = {

     // ----------- Create Course Request Starts --------------------
    "/courses/createCourse": {
      post: {
        tags: ["Courses"],
        operationId: "createCourse",
        summary: "Add Course",
        description: "Add Course",
        security: [{ JWT: [] }],
        parameters: [
          {
            name: "course",
            required: true,
            in: "body",
            type: "object",
            description: "Course Information.",
            schema: {
              $ref: "#/defination/createCourseRequest",
            },
          },
        ],
        responses: {
          200: {
            description: "New Course Created Successfully!!!",
            schema: {
              // Not cleared yet
            },
          },
        },
      },
    },//=> Create Course Request Ends

    // ----------- Get All Courses Request Starts --------------------
    "/courses/getAllCourses": {
      get: {
        tags: ["Courses"],
        operationId: "getAllCourses",
        summary: "Get All Courses",
        description: "Get Courses",
        security: [{ JWT: [] }],
        parameters: [],
        responses: {
          200: {
            description: "Courses Fetched Successfully!!!",
            schema: {
             $ref : "#/definitions/getAllCoursesRequest"
            },
          },
        },
      },
    },//=> Get All Courses Request Ends

    // ----------- Update All Courses Request Starts --------------------
    "/courses/updateCourseById/{id}": {
      put: {
        tags: ["Courses"],
        operationId: "updateCourseById",
        summary: "Update Course By Id",
        description: "Update Courses",
        security: [{ JWT: [] }],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of the course to be updated",
            required: true,
            type: "integer",
            format: "int64",
          },
          {
          name: "course",
          required: true,
          in: "body",
          type: "object",
          description: "Update Course Information.",
          schema: {
            $ref: "#/defination/updateCoruseByIdRequest",
          },
        },],
        responses: {
          200: {
            description: "Course Updated Successfully!!!",
            schema: {
             $ref : "#/definitions/updateCoruseByIdRequest"
            },
          },
        },
      },
    },//=> Update Course By Id Request Ends

     // ----------- Delete Course By Id Request Starts --------------------
     "/courses/deleteCourseById/{id}": {
      delete : {
        tags: ["Courses"],
        operationId: "deleteCourseById",
        summary: "Delete Course By Id",
        description: "Delete Courses",
        security: [{ JWT: [] }],
        parameters: [ {
          name: "id",
          in: "path",
          description: "ID of the course to be deleted",
          required: true,
          type: "integer",
          format: "int64",
          schema: {
            $ref : "#/definitions/deleteCourseByIdRequest"
           },
        }],
        responses: {
          200: {
            description: "Course Deleted Successfully!!!",
            schema: {
             $ref : "#/definitions/deleteCourseByIdRequest"
            },
          },
        },
      },
    },//=> Delete Course By Id Request Ends

     // ----------- Get Course By Id Request Starts --------------------
     "/courses/getCourseById/{id}": {
      get : {
        tags: ["Courses"],
        operationId: "getCourseById/{id}",
        summary: "Get Course By Id",
        description: "Get Courses",
        security: [{ JWT: [] }],
        parameters: [ {
          name: "id",
          in: "path",
          description: "ID of the course to be get",
          required: true,
          type: "integer",
          format: "int64",
          schema: {
            $ref : "#/definitions/getCourseByIdRequest"
           },
        }],
        responses: {
          200: {
            description: "Course Fetched Successfully!!!",
            schema: {
             $ref : "#/definitions/getCourseByIdRequest"
            },
          },
        },
      },
    },//=> Get Course By Id Request Ends
  
  };
  