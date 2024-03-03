import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// localhost:3001/posts
app.use('/posts', postRoutes);

// https://www.mongodb.com/cloud/atlas
const CONNECTION_URL = 'mongodb+srv://jadejamigdev:C8Vt9gHbgCjZfi1n@cluster-1.c6td7gd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-1';

// process.env.PORT is important because it will give the default port of 
// the hosting platform once we deploy the app into a web hosting platform
const PORT = process.env.PORT || 3001;

// Connect to database
// useNewUrlParse and useUnifiedTopology are optional to avoid warnings
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

