// ------------------ Swagger Definition ------------------

exports.defination = {

    // ----------- Create Residency Request Starts --------------------
    createResidencyRequest: {
        required: ["residency_name", "duration", "isMandatory", "publish"],
        properties: {
            residency_name: {
                type: "string",
                example: "Sample Residency Name",
            },
            duration: {
                type: "integer",
                example: 6,
            },
            instructions: {
                type: "string",
                example: "Sample Residency Instruction",
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
            publish: {
                type: "boolean",
                example: false,
            },
        },
        securityDefinitions: {
            JWT: {
                type: "apiKey",
                name: "Authorization",
                in: "header",
            },
        },
    },//=> Create Residency Request Ends

};
  
// ------------------- Swagger Paths -------------------------------

exports.path = {

    // ----------- Create Residency Request Starts --------------------
    "/residencies/createResidency": {
        post: {
            tags: ["Residencies"],
            operationId: "createResidency",
            summary: "Add Residency",
            description: "Add Residency",
            security: [{ JWT: [] }],
            parameters: [
                {
                    name: "residency",
                    required: true,
                    in: "body",
                    type: "object",
                    description: "Residency Information.",
                    schema: {
                        $ref: "#/defination/createResidencyRequest",
                    },
                },
            ],
            responses: {
                200: {
                    description: "New Residency Created Successfully!!!",
                    schema: {
                        // Not cleared yet
                    },
                },
            },
        },
    },//=> Create Residency Request Ends

};
