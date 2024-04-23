const express = require('express');
const rootRouter = require('./routers');
const {errorHandler} = require('./middlewares/errors/index')

const app = express();

app.use(express.json());

app.use(rootRouter);

app.use(errorHandler);

module.exports = app;

app.use((req, res, next) => {
    console.log(`Received ${req.method} request for ${req.url} from ${req.ip}`);
    next();
  });

