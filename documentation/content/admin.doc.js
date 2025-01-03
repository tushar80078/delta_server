// ------------------ Swagger Definition ------------------

exports.defination = {

    // ----------- Create Admin Request Starts ---------------------

    createAdminRequest: {
      required: ["admin_name", "email_address", "password"],
      properties: {
        admin_name: {
          type: "string",
          example: "John Admin",
        },
        email_address: {
          type: "string",
          example: "john_admin@example.com",
        },
        password: {
          type: "string",
          example: "Abc12345*",
        },
      },
    }, // => Create Admin Request Ends


    

    // ----------- Login Admin Request Starts ---------------------

    loginAdminRequest: {
        required: ["email_address", "password"],
        properties: {
          email_address: {
            type: "string",
            example: "john_admin@example.com",
          },
          password: {
            type: "string",
            example: "Abc12345*",
          },
        },
      }, // => Login Admin Request Ends

 
};
  
  // ------------------- Swagger Paths -------------------------------
  
  exports.path = {

    // ----------- Create Admin Request Starts ---------------------

    "/admin/createAdmin": {
      post: {
        tags: ["Admin"],
        operationId: "createAdmin",
        summary: "Add Admin",
        description: "Add Admin",
        security: [{ JWT: [] }],
        parameters: [
          {
            name: "admin",
            required: true,
            in: "body",
            type: "object",
            description: "Admin Information.",
            schema: {
              $ref: "#/defination/createAdminRequest",
            },
          },
        ],
        responses: {
          200: {
            description: "New Admin Created Successfully!!!",
            schema: {
              // Not cleared yet
            },
          },
        },
      },
    }, // => Create Admin Request Ends




    // ----------- Login Admin Request Starts ---------------------

    "/admin/loginAdmin": {
        post: {
          tags: ["Admin"],
          operationId: "loginAdmin",
          summary: "Login Admin",
          description: "Login Admin",
          security: [{ JWT: [] }],
          parameters: [
            {
              name: "admin",
              required: true,
              in: "body",
              type: "object",
              description: "Login Information.",
              schema: {
                $ref: "#/defination/loginAdminRequest",
              },
            },
          ],
          responses: {
            200: {
              description: "Admin Login Successfully!!!",
              schema: {
                // Not cleared yet
              },
            },
          },
        },
      }, // => Login Admin Request Ends
  
  };
  