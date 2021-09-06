import express from 'express'
import bodyParser from 'body-parser'
import initWebRoutes from './routes/post'
import connectDB from './config/connectDb'
import cors from 'cors'
import 'dotenv/config'
import router from './routes/post'

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
initWebRoutes(app);

connectDB();

router(app);

let port = process.env.PORT || 6969;
app.listen(port, () => console.log("App listening at localhost:" + port));