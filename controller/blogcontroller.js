const blogModel = require("../modal/blogmodel");

const addBlog = async (req, resp) => {
    try {
        const { title, img, desc } = req.body
        await blogModel.create({ title, img, desc })
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);
    }
}

const deleteBlog = async (req, resp) => {
    try {
        await blogModel.findByIdAndDelete(req.params.id)
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);

    }
}

const editForm = async (req, resp) => {
    const data = await blogModel.findById(req.params.id)
    resp.render("edit", { data })
}

const editBlog = async (req, resp)=> {
    try {
        const { title, img, desc } = req.body
        await blogModel.findByIdAndUpdate(req.params.id, req.body)
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);

    }
}

module.exports = { addBlog, deleteBlog, editForm, editBlog }