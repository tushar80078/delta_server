// ------------------ Swagger Definition ------------------

exports.defination = {

    // ----------- Create Video Recorded Session Request Starts --------------------
    createVideoRecordedSessionRequest: {
        required: ["session_name", "recording_date", "base_points", "allocated_points", "isMandatory", "publish"],
        properties: {
            session_name: {
                type: "string",
                example: "Sample Session Name",
            },
            recording_date: {
                type: "string",
                format: "date-time",
                example: "2023-09-01T15:30:00.000Z",
            },
            video_url: {
                type: "string",
                example: "http://example.com/sample-video.mp4",
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
    },//=> Create Video Recorded Session Request Ends

};
  
// ------------------- Swagger Paths -------------------------------

exports.path = {

    // ----------- Create Video Recorded Session Request Starts --------------------
    "/sessions/createRecordedSession": {
        post: {
            tags: ["VideoRecordedSessions"],
            operationId: "createVideoRecordedSession",
            summary: "Add Video Recorded Session",
            description: "Add Video Recorded Session",
            security: [{ JWT: [] }],
            parameters: [
                {
                    name: "session",
                    required: true,
                    in: "body",
                    type: "object",
                    description: "Video Recorded Session Information.",
                    schema: {
                        $ref: "#/defination/createVideoRecordedSessionRequest",
                    },
                },
            ],
            responses: {
                200: {
                    description: "New Video Recorded Session Created Successfully!!!",
                    schema: {
                        // Not cleared yet
                    },
                },
            },
        },
    },//=> Create Video Recorded Session Request Ends

};
