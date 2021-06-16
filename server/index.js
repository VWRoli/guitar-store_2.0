import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import createHttpError from 'http-errors';

dotenv.config({ silent: true });

const port = process.env.PORT;

//App init
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the store API!');
});

//404 handler
app.use((req, res, next) => {
  next(createHttpError(404, 'Not Found!'));
});

//Error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      status: error.status || 500,
      message: error.message,
    },
  });
});

//Connect to DB
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(port, () => console.log(`Server is up on port ${port}`));
  })
  .catch((error) => console.log(error));
