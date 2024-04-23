const userRouter = require('./user.Router');
const rootRouter = require('express').Router();

rootRouter.use('/users', userRouter)

module.exports = rootRouter;