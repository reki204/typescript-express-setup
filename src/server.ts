import express from 'express';
const app: express.Application = express();
const port: string | number = process.env.PORT || 8080;

app.get('/', (req: express.Request, res: express.Response) => res.send('Hello World!'));

app.listen(port, () => console.log(`listening on ${port}`));
