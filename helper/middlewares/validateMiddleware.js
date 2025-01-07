const validate = ({ bodySchema, paramsSchema, querySchema }) => (req, res, next) => {
    try {
        const errors = {};

        if (bodySchema) {
            try {
                bodySchema.parse(req.body);
            } catch (error) {
                errors.body = error.errors.map((e) => ({
                    field: e.path.join("."),
                    message: e.message,
                }));
            }
        }

        if (paramsSchema) {
            try {
                paramsSchema.parse(req.params);
            } catch (error) {
                errors.params = error.errors.map((e) => ({
                    field: e.path.join("."),
                    message: e.message,
                }));
            }
        }

        if (querySchema) {
            try {
                querySchema.parse(req.query);
            } catch (error) {
                errors.query = error.errors.map((e) => ({
                    field: e.path.join("."),
                    message: e.message,
                }));
            }
        }


        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ errors });
        }

        next();
    } catch (error) {
        next(error);
    }
};

module.exports = validate;
