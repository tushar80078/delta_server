// Error MiddleWare Configuration

const errorMiddleware = (err, req, res, next) => {
    console.log('Error midddleware err : ', err);
    res
        .status(err.statusCode ? err.statusCode : 500)
        .send({ err: err.message, data: err.data, success: false });
};

module.exports = errorMiddleware;
