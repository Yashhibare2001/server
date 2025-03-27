
const express = require('express');
const mongoose = require("mongoose");


const routes = require('./Routes/index');
require('dotenv').config();
const app = express();

const port = 8040;


// const mongoURI = process.env.uri;


// CORS issue will be solved // manual cors issue fixing
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // http://localhost:3000
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Header', 'Content-Type, Authorization');
    next();
});

// //npm i cors
// app.use('/', routes);

// app.listen(port, () => {
//     console.log(`Server is running on ${port}`);
// });

// mongoose
  // .connect( 
  //   process.env.uri, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // })
  // .then(() => console.log("✅ MongoDB Connected Successfully"))
  // .catch((err) => console.error("❌ MongoDB Connection Error:", err));

  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch((err) => console.error("❌ MongoDB Connection Error:", err));

//npm i cors
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});