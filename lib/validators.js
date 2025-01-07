const { z } = require("zod");

/*Login Schema */

const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

/*Login Schema */


module.exports = {
    loginSchema,
};
