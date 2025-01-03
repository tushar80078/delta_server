// ------------------ Swagger Definition ------------------

exports.defination = {

    // ----------- Create Project Request Starts --------------------
    createProjectRequest: {
        required: ["title", "isMandatory", "allocation_time_period","publish"],
        properties: {
            title: {
                type: "string",
                example: "Sample Project Title",
            },
            instructions: {
                type: "string",
                example: "Sample Project Instruction",
            },
            base_points: {
                type: "number",
                format: "float",
                example: 10.50,
            },
            allocated_points: {
                type: "number",
                format: "float",
                example: 5.75,
            },
            isMandatory: {
                type: "boolean",
                example: true,
            },
            allocation_time_period: {
                type: "integer",
                example: 30,
            },
            projectFor: {
                type: "string",
                example: "course",
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
    },//=> Create Project Request Ends

};
  
// ------------------- Swagger Paths -------------------------------

exports.path = {

    // ----------- Create Project Request Starts --------------------
    "/projects/createProject": {
        post: {
            tags: ["Projects"],
            operationId: "createProject",
            summary: "Add Project",
            description: "Add Project",
            security: [{ JWT: [] }],
            parameters: [
                {
                    name: "project",
                    required: true,
                    in: "body",
                    type: "object",
                    description: "Project Information.",
                    schema: {
                        $ref: "#/defination/createProjectRequest",
                    },
                },
            ],
            responses: {
                200: {
                    description: "New Project Created Successfully!!!",
                    schema: {
                        // Not cleared yet
                    },
                },
            },
        },
    },//=> Create Project Request Ends

};
