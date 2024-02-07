import express from 'express';
import cors from 'cors';
import * as mongoose from 'mongoose';
import linksRouters from './routers/links';

const app = express();

const port = 8000;

app.use(cors());
app.use(express.json());
app.use('/links', linksRouters);


const run = async () => {

  await mongoose.connect('mongodb://localhost/urlShort');

  app.listen(port, () => {

    console.log(`server started on ${port} port`);

    process.on('exit', () => {
      mongoose.disconnect();
    });
  });
};

run().catch(e => console.error(e));
