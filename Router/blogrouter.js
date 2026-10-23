const express = require('express');
const { addBlog, deleteBlog, editForm, editBlog } = require('../controller/blogcontroller');

const b_router = express.Router()

b_router.get("/add",(req,resp)=>{
    resp.render("add")
})

b_router.post("/add",addBlog)

b_router.get("/edit/:id",editForm)

b_router.patch("/edit/:id",editBlog)

b_router.delete("/delete/:id", deleteBlog)

module.exports = b_router