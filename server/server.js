import express from 'express'
import connect from './db/mongodb.js';
import cors from 'cors'
import bodyParser from 'body-parser';
import routes from './routes/index.js';
import passport  from 'passport';
import initializePassport from './config/passport.js'

const app = express();
const port = 4000;

initializePassport(passport)

app.use(cors());
app.use(bodyParser.json())

app.use('/', routes)

await connect();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
