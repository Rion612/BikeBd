const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const env = require('dotenv');
const path = require("path");
const app = express();



env.config();

mongoose
  .connect(
    `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0-shard-00-00.kygpd.mongodb.net:27017,cluster0-shard-00-01.kygpd.mongodb.net:27017,cluster0-shard-00-02.kygpd.mongodb.net:27017/${process.env.MONGO_DB_DATABASE}?ssl=true&replicaSet=atlas-irldf1-shard-0&authSource=admin&retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("Database connected");
  });

app.use(cors());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
const indexRoute = require('./Route/index');
const showroomRoute = require('./Route/showroom');
const bikeRoute = require('./Route/bike');
const helmetRoute = require('./Route/helmet');
const newsRoute = require('./Route/news');
const contactRoute = require('./Route/contact');

app.use("/api",indexRoute);
app.use("/api",showroomRoute);
app.use("/api",bikeRoute);
app.use("/api",helmetRoute);
app.use("/api",newsRoute);
app.use("/api",contactRoute);


app.listen(process.env.PORT,()=>{
    console.log(`Server is running successfully on port ${process.env.PORT}`);
})