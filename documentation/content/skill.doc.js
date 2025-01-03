// ------------------ Swagger Definition ------------------

exports.defination = {

    // ----------- Create Skill Request Starts --------------------
    createSkillRequest : {
      required: ["name", "skill_description", "skill_score","has_project","has_project","skill_image_link","publish"],
      properties: {
        name: {
          type: "string",
          example: "Basic React",
        },
        skill_description: {
          type: "string",
          example: "React For Begginners",
        },
        skill_score: {
            type: "decimal",
            example: 0 ,
        },
        has_project: {
            type: "Boolean",
            example: true,
        },
        skill_image_link:{
            type: "string",
            example: "skill_image_link",
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
    },//=> Create Skill Request Ends

   
 
};
  
  // ------------------- Swagger Paths -------------------------------
  
  exports.path = {

     // ----------- Create Skill Request Starts --------------------
    "/skills/createSkill": {
      post: {
        tags: ["Skills"],
        operationId: "createSkills",
        summary: "Add Skill",
        description: "Add Skill",
        security: [{ JWT: [] }],
        parameters: [
          {
            name: "skill",
            required: true,
            in: "body",
            type: "object",
            description: "Skill Information.",
            schema: {
              $ref: "#/defination/createSkillRequest",
            },
          },
        ],
        responses: {
          200: {
            description: "New Skill Created Successfully!!!",
            schema: {
              // Not cleared yet
            },
          },
        },
      },
    },//=> Create Skill Request Ends

  
  };
  