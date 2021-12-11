const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./routes/userRouter');
const connectDB = require('./config/db');
const notes = require('./data/notes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleWare');
dotenv.config();
connectDB();

const app = express();
app.use(express.json())

app.get("/", (re, res)=>{
    res.send("API is running")
})

app.get("/api/notes", (req, res)=>{
    res.json(notes);
})

app.use("/api/users", userRouter);


app.use(notFound)
app.use(errorHandler)
const PORT = process.env.port || 8000;
app.listen(PORT, console.log(`server started at port ${PORT}`))