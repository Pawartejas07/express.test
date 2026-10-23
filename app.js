const express = require('express');
const { connectDB } = require('./db');
const session = require('express-session');
const router = require('./Router/userrouter');
const b_router = require('./Router/blogrouter');
const methodOverride = require('method-override');
const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")

app.use(session({
    secret : "testevfhvd",
    resave:false,
    saveUninitialized:false
}))

app.use(methodOverride("_method"))

app.use("/", router)
app.use("/",b_router)

app.listen(4000,()=>{
    console.log("running...");
})