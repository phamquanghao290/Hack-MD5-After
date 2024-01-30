import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import runRouter from './src/router/categories.route';
import goRouter from './src/router/question.route';
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/categories', runRouter)
app.use('/api/v1/questions', goRouter)

app.listen(9998, () => {
    console.log('Listening on port 9998');
})