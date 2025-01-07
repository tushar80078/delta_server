exports.definitions = {
    loginRequest: {
        type: "object",
        required: ["email", "password"],
        properties: {
            email: {
                type: "string",
                format: "email",
                example: "user@example.com",
            },
            password: {
                type: "string",
                example: "securepassword123",
            },
        },
    },

    loginResponse: {
        type: "object",
        required: ["success", "msg", "data"],
        properties: {
            success: {
                type: "boolean",
                example: true,
            },
            msg: {
                type: "string",
                example: "Operation successful",
            },
            data: {
                type: "object",
                required: ["token", "userData"],
                properties: {
                    token: {
                        type: "string",
                        example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                    },
                    userData: {
                        type: "object",
                        required: [
                            "email",
                            "firstName",
                            "lastName",
                            "role",
                            "id",
                            "gender",
                            "createdAt",
                            "profileImage",
                            "updatedAt"
                        ],
                        properties: {
                            email: {
                                type: "string",
                                format: "email",
                                example: "user@example.com",
                            },
                            firstName: {
                                type: "string",
                                example: "John",
                            },
                            lastName: {
                                type: "string",
                                example: "Doe",
                            },
                            role: {
                                type: "string",
                                example: "Admin",
                            },
                            id: {
                                type: "string",
                                example: "user456",
                            },
                            gender: {
                                type: "string",
                                example: "Male",
                            },
                            createdAt: {
                                type: "string",
                                example: "2025-01-03T11:46:48.717Z",
                            },
                            profileImage: {
                                type: "string",
                                example: "img",
                            },
                            updatedAt: {
                                type: "string",
                                example: "2025-01-03T11:46:48.717Z",
                            },
                        },
                    },
                },
            },
        },
    },
}

exports.paths = {
    "/auth/login": {
        post: {
            tags: ["Authentication"],
            summary: "Login the user",
            description: "",
            operationId: "loginUser",
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/definations/loginRequest",
                        },
                    },
                },
            },
            responses: {
                200: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/definations/loginResponse",
                            },
                        },
                    },
                },
                409: {
                    description: "Bad Request",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Incorrect Username or password",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};
