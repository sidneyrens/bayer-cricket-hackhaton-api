import express from 'express';
import cors from 'cors';
import { getS3Object } from './getS3Object';
import { getUserInfo } from './getUserInfo';

const app = express();
app.use(cors());

app.get('/get-doc/:userid', getUserInfo, getS3Object);

app.get('/', function (req, res) {
  res.send({ message: 'hello world!' })
});

export default app;
