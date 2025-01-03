// ------------------ Swagger Definition ------------------

exports.defination = {

    // ----------- Create Mentor Request Starts --------------------
    createMentorRequest : {
      required: ["first_name", "last_name", "experience_level","email_address","mobile_no","dob","password","skills_specialization","education"],
      properties: {
        first_name: {
          type: "string",
          example: "Merry",
        },
        last_name: {
          type: "string",
          example: "Kut",
        },
        experience_level: {
            type: "string",
            example: "expert" ,
        },
        email_address: {
            type: "string",
            example: "merry@example.com",
        },
        mobile_no:{
            type: "string",
            example: "8007891320",
        },
        dob:{
            type:"date",
            example:"2023-09-01T15:30:00.000Z"
        },
        password : {
            type:"string",
            example:"Abc12345*"
        },
        education : {
            type:"string",
            example:"BTech*"
        },
        skills_specialization:{
            type : "string",
            example:"Master In React"
        }
      },
      securityDefinitions: {
        JWT: {
          type: "apiKey",
          name: "Authorization",
          in: "header",
        },
      },
    },//=> Create Mentor Request Ends

   
 
};
  
  // ------------------- Swagger Paths -------------------------------
  
  exports.path = {

     // ----------- Create Mentor Request Starts --------------------
    "/mentors/createMentor": {
      post: {
        tags: ["Mentors"],
        operationId: "createMentor",
        summary: "Add Mentor",
        description: "Add Mentor",
        security: [{ JWT: [] }],
        parameters: [
          {
            name: "mentor",
            required: true,
            in: "body",
            type: "object",
            description: "Mentor Information.",
            schema: {
              $ref: "#/defination/createMentorRequest",
            },
          },
        ],
        responses: {
          200: {
            description: "New Mentor Created Successfully!!!",
            schema: {
              // Not cleared yet
            },
          },
        },
      },
    },//=> Create Mentor Request Ends

  
  };
  