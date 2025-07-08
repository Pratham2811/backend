// server.js
import  express from 'express';
const app = express();
app.get('/', (_, res) => res.send('Hello '));
app.listen(3000, () => console.log('Listening on port 3000'));
