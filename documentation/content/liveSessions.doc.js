// ------------------ Swagger Definition ------------------

exports.defination = {

    // ----------- Create Live Session Request Starts --------------------
    createLiveSessionRequest: {
        required: ["session_name", "session_duration", "base_points", "allocated_points", "isMandatory", "publish"],
        properties: {
            session_name: {
                type: "string",
                example: "Sample Session Name",
            },
            session_duration: {
                type: "integer",
                example: 60, // Example: 60 minutes
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
            created_at: {
                type: "string",
                format: "date-time",
                example: "2023-09-01T15:30:00.000Z",
            },
            updated_at: {
                type: "string",
                format: "date-time",
                example: "2023-09-01T15:30:00.000Z",
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
    },//=> Create Live Session Request Ends

};
  
// ------------------- Swagger Paths -------------------------------

exports.path = {

    // ----------- Create Live Session Request Starts --------------------
    "/sessions/createLiveSession": {
        post: {
            tags: ["LiveSessions"],
            operationId: "createLiveSession",
            summary: "Add Live Session",
            description: "Add Live Session",
            security: [{ JWT: [] }],
            parameters: [
                {
                    name: "session",
                    required: true,
                    in: "body",
                    type: "object",
                    description: "Live Session Information.",
                    schema: {
                        $ref: "#/defination/createLiveSessionRequest",
                    },
                },
            ],
            responses: {
                200: {
                    description: "New Live Session Created Successfully!!!",
                    schema: {
                        // Not cleared yet
                    },
                },
            },
        },
    },//=> Create Live Session Request Ends

};
