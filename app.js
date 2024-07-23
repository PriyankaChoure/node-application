import express from 'express';
import router from './src/routes/index.js';
const app = express();




// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("Server is running");
});
app.use("/backend", router);

export default app;
